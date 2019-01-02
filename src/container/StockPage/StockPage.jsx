import React from "react"
import { Icon, Button, Row, Col, DatePicker, Radio, message  } from "antd"
import moment from "moment";
import Highcharts from 'highcharts'
import $ from "jquery"
import "./StockPage.less"
import Api from "../../until/api"

const { RangePicker } = DatePicker;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
let setI;
let chart;
let datas = [];
class StockPage extends React.Component{
    constructor(props) {
        super(props);
        this.chart = null;
        this.setI = null;
        this.state = {
            id:this.props.match.params.id,
            date:this.props.match.params.date,
            tableInfo:[],
            chart:null,
            up:0,
            down:0,
            bidInfo:{},
            isMine:0,
            value:"0",
            num:1,
            price:0,
            canBeFlat:0
        }
    }

    componentDidMount(){
        let id = this.state.id;
        let dates = this.state.date;
        Api.hmdTg({id:this.state.id,date:this.state.date}).then(res => {
            datas = res.data.hmd;
            Api.getTime().then(res =>{
                let time = res.data*1000;
                this.getChart(datas,time)
            });
        }).catch(err =>{

        });
        Api.smdTg({id:this.state.id,date:this.state.date}).then(res => {
            this.setState({
                bidInfo:res.data||[],
                price:res.data.lp
            });
        }).catch(err =>{
        });
        let data = [];
        this.getMyOptional();
    }

    getChart = (datas,time) =>{
        let id = this.state.id;
        let dates = this.state.date;
        let week = new Date().getDay();
        let today = new Date(new Date().toLocaleDateString()).getTime();
        let date = today+34200000;
        let now = time - date;
        let date1 = today+54000000;
        if(now/1000 < 0){
            date = today+34200000-8460000;
            date1 = today+54000000-84600000;
        }
        let data = [];
        if(week === 0||week === 6){
            for (let i = -4800; i <= 0; i += 1) {
                data.push({
                    x: date + i * 4125,
                    y: datas[i+4800]/1
                });
            }
        }else {
            if(now/1000 > 19800||now/1000 < 0){
                for (let i = -4800; i <= 0; i += 1) {
                    data.push({
                        x: date + i * 4125,
                        y: datas[i+4800]/1
                    });
                }
            }else {
                let time = now/datas.length;
                for(let i = 0; i<=datas.length;i++){
                    // if(new Date()){
                    //     break
                    // }
                    data.push({
                        x: date + i * time,
                        y: datas[i]
                    });
                }
            }
        }
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
        function activeLastPointToolip(chart) {
            let points = chart.series[0].points;
            chart.tooltip.refresh(points[points.length - 1]);
        }
        this.setI = setInterval(()=>{
            let  count = 0;
            if(now/1000 > 19800||now/1000 < 0||week === 6 ||week === 0){
                if(data.length === 4801){
                    count++
                }
            }else {
                if(data.length){
                    count++
                }
            }
            if(count === 1){
                let params = {
                    chart: {
                        // type: 'spline',
                        marginRight: 10,
                        events: {
                            load: function () {
                                let series = this.series[0],
                                    chart = this,
                                    xAxis = this.xAxis;
                                // series.data = data;
                                let setI = setInterval(function () {
                                    Api.getTime().then(res =>{
                                        let now = Date.now()-date;
                                        Api.smdTg({id:id,date:dates}).then(res => {
                                            if(now/1000 > 19800||now/1000 < 0||week === 6 ||week === 0){
                                                clearInterval(setI)
                                            }else {
                                                // series.data.length = (now/4125).toFixed(0)+1;
                                                let x = (new Date()).getTime(), // 当前时间
                                                    y = res.data.lp;          // 随机值
                                                series.addPoint([x, y], true, true);
                                            }
                                        }).catch(err =>{
                                        })
                                    }).catch(err =>{});
                                    // activeLastPointToolip(chart);
                                }, 4125);
                            }
                        }
                    },
                    title: {
                        text: '动态模拟实时数据'
                    },
                    yAxis: {
                        title: {
                            text: null
                        }
                    },
                    rangeSelector : {
                        buttons : [{
                            type : 'hour',
                            count : 1,
                            text : '1h'
                        }],
                        selected : 1,
                        inputEnabled : false
                    },
                    legend: {
                        enabled: false
                    },
                    series: [{
                        // type:'area',
                        name: '随机数据',
                        turboThreshold:20000,
                        data: (function () {
                            return data
                        })()
                    }]
                };
                if(now/1000 > 19800||now/1000 < 0||week === 6 ||week === 0){
                    params.xAxis = {
                        type: 'datetime',
                            tickPixelInterval: 1,
                            // min:date,
                            // max:date1,
                            tickWidth:0,    	//设置刻度标签宽度
                            lineColor:'#ccc',//设置坐标颜色
                            lineWidth:1,		//设置坐标宽度
                            labels: {
                            enabled: false
                        }
                    };
                    params.tooltip = {
                        formatter: function (){
                            let value = this.y;
                            let time = this.x+19800000;
                            return new Date(time) + '<br/>' + value;
                        }
                    }
                }else {
                    params.xAxis = {
                        type: 'datetime',
                        tickPixelInterval: 1,
                        min:date,
                        max:date1,
                        tickWidth:0,    	//设置刻度标签宽度
                        lineColor:'#ccc',//设置坐标颜色
                        lineWidth:1,		//设置坐标宽度
                        labels: {
                            enabled: false
                        }
                    };
                    params.tooltip = {
                        formatter: function (){
                            let value = this.y;
                            let time = this.x;
                            return new Date(time) + '<br/>' + value;
                        }
                    }
                }
                this.chart = Highcharts.chart('chart_wrap', params);
                clearInterval(this.setI)
            }
        },1000)
    }

    getMyOptional(){
        Api.optional({id:this.state.id}).then(res => {
            this.setState({
                isMine:res.data.is_optional,
                canBeFlat:res.data.can_be_flat
            })
        }).catch(err => {

        })
    }

    componentWillUnmount(){
        this.chart = null;
        clearInterval(this.setI)
    }

    editOptional(){
        Api.editOptional({id:this.state.id}).then(res => {
            message.success(res.msg)
            this.getMyOptional()
        }).catch(err =>{
            message.warning(err.msg)
        })
    }

    weiTuoKh(dir){
        let params = {
            inst:this.state.id,
            dir,
            of:dir,
            vol:this.state.num,
            price:this.state.price
        };
        Api.weiTuoKh(params).then(res =>{
            message.success(res.data.msg)
        }).catch(err => {
            message.warning(err.data.msg)
        })
    }

    render(){
        const values = [5,10,15,20,25,30]
        return(
            <div className="stock-page-wrap">
                <div className="stock-page-header">
                    <Icon onClick={()=>{window.history.go(-1)}} type="left" theme="outlined" />
                    <p>交易操作</p>
                </div>
                <div className="stock-info-content">
                    <div className="header-info">
                        {/*<Row>*/}
                            {/*<Col span={6}><span>合约标的</span></Col>*/}
                            {/*<Col span={10}><span>上证50ETF</span></Col>*/}
                            {/*<Col span={8}><span>2.594 3.47%</span></Col>*/}
                        {/*</Row>*/}
                        <Row>
                            <Col span={6}><span>合约描述</span></Col>
                            <Col span={10}><span key={Math.random()}>{this.state.bidInfo.id?this.state.bidInfo.name:""}</span></Col>
                            <Col span={8}><span key={Math.random()}>{this.state.bidInfo.id?this.state.bidInfo.id:""}</span></Col>
                        </Row>
                        <p>
                            <span key={Math.random()}>最新价<i>{this.state.bidInfo.id?this.state.bidInfo.lp:0}</i></span>
                            <span key={Math.random()}>昨收价{this.state.bidInfo.id?this.state.bidInfo.yesterday_price:0}</span>
                            <span key={Math.random()}>涨跌幅<i>{this.state.bidInfo.id?((this.state.bidInfo.lp/this.state.bidInfo.yesterday_price-1)*100).toFixed(2):0.00}%</i></span>
                        </p>
                    </div>
                    <div className="stock-chart">
                        <div>
                            <div id="chart_wrap">
                            </div>
                            <Row>
                                <Col span={8}><span>09:30</span></Col>
                                <Col span={8}><span>11:30-13:00</span></Col>
                                <Col span={8}><span>15:00</span></Col>
                            </Row>
                        </div>
                    </div>
                    <div className="price-control">
                        <Row>
                            <Col span={6}><span>委托价格</span></Col>
                            <Col span={18}>
                                <Button onClick={()=>{this.setState({price:this.state.price - 0.0001})}} className="add-cut"></Button>
                                <span key={Math.random()} className="add-value-cut">{this.state.price.toFixed(4)}</span>
                                <Button onClick={()=>{this.setState({price:this.state.price + 0.0001})}} className="add-cut"></Button>
                            </Col>
                        </Row>
                        <Row>
                            <RadioGroup onChange={(value)=>{this.setState({num:value.target.value})}} value={this.state.num}>
                                {
                                    values.map((item, index) => {
                                        return <Col span={4} key={index}>
                                            <RadioButton className={this.state.num === item?"isChecked":""} value={item}>{item}</RadioButton>
                                        </Col>
                                    })
                                }
                            </RadioGroup>
                        </Row>
                        <Row>
                            <Col span={6}><span>交易数量</span></Col>
                            <Col span={18}>
                                <Button onClick={()=>{this.setState({num:--this.state.num})}} className="add-cut"></Button>
                                <span key={Math.random()} className="add-value-cut">{this.state.num}</span>
                                <Button onClick={()=>{this.setState({num:++this.state.num})}} className="add-cut"></Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}><span>可平数量</span></Col>
                            <Col span={18}><span key={Math.random()}>{this.state.canBeFlat}</span></Col>
                        </Row>
                    </div>
                    <Row className="operation-button">
                        <Col span={6}><Button onClick={()=>this.weiTuoKh(0)}>开仓</Button></Col>
                        <Col span={12}><Button key={Math.random()} onClick={()=>this.editOptional()}>{this.state.isMine === 1?"删除自选":"添加自选"}</Button></Col>
                        <Col span={6}><Button onClick={()=>this.weiTuoKh(1)}>平仓</Button></Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default StockPage
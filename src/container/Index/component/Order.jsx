import React from "react"
import {Button, Icon, Tabs, Row, Col, Drawer, Select} from "antd"
import { connect } from "react-redux";
import "./Order.less"
import $ from "jquery"

const Option = Select.Option;
const TabPane = Tabs.TabPane;

class Order extends React.Component{
    constructor(props) {
        super(props);
        this.setI = null;
        this.state = {
            activeKey:"1",
            data:[
                {
                    name:"离岸人民币-WFUSDCNH",
                    laba:0,
                    order:null,
                    execute:25852,
                    expire:25849,
                    direction:"up",
                    rate:82,
                    img: require("../../../layouts/image/cn.png"),
                    value: 100,
                    up: 182,
                    duration: 42,
                    time: "2018-12-30 13:55:00",
                    over:42
                },
                {
                    name:"恒指主连-HSIF",
                    laba:0,
                    order:null,
                    execute:25852,
                    expire:25849,
                    direction:"up",
                    rate:82,
                    img: require("../../../layouts/image/hongkong.png"),
                    value: 500,
                    up: 375,
                    duration: 192,
                    time: "2018-12-30 13:55:00",
                    over:192
                },
                {
                    name:"离岸人民币-WFUSDCNH",
                    laba:0,
                    order:null,
                    execute:25852,
                    expire:25849,
                    direction:"down",
                    rate:82,
                    img: require("../../../layouts/image/cn.png"),
                    value: 100,
                    up: -100,
                    duration: 24,
                    time: "2018-12-30 13:55:00",
                    over:24
                },
                {
                    name:"离岸人民币-WFUSDCNH",
                    laba:0,
                    order:null,
                    execute:25852,
                    expire:25849,
                    direction:"up",
                    rate:82,
                    img: require("../../../layouts/image/cn.png"),
                    value: 100,
                    up: 182,
                    duration: 50,
                    time: "2018-12-30 13:55:00",
                    over:50
                },
            ],
            open:[0,0,0,0],
            isOpenDrawer:false,
            date:"0",
            profit:"0",
            money:"0",
            radio:null
        }
    }

    componentDidMount(){
        this.progress()
    }

    progress(){
        clearTimeout(this.setI);
        this.setI = setTimeout(()=>{
            this.ProgressGo()
        },1000);
    }

    ProgressGo(){
        for(let i = 0;i<this.state.open.length;i++){
            if(Date.parse(new Date()) >= Date.parse(new Date(this.state.data[i].time))){
                if(!this.state.open[i]&&!$(".progress"+i).is(":animated")){
                    let arr = this.state.data;
                    let duration = ((((Date.parse(new Date()) - Date.parse(new Date(arr[i].time)))/1000).toFixed(0))/arr[i].over).toFixed(2);
                    let width = duration >= 0 ?duration*100+"vw":0;
                    let time = Date.parse(new Date(arr[i].time))+arr[i].over*1000-Date.parse(new Date());
                    $(".progress"+i).css({
                        width: width
                    }).animate({
                        width: "100vw"
                    },time);
                    let setT = setTimeout(()=>{
                        $(".no-open"+i).css({
                            display: "none"
                        });
                        clearTimeout(setT)
                    },(this.state.data[i].duration+1)*1000)
                }else {
                    let arr = this.state.data;
                    let duration = Date.parse(new Date(arr[i].time))+arr[i].over*1000;
                    duration = ((duration - Date.parse(new Date()))/1000).toFixed(0);
                    arr[i].duration = duration;
                    if(duration <= 0){
                        let open = this.state.open;
                        open[i] = 0;
                        this.setState({
                            open
                        })
                    }
                    this.setState({
                        data:arr
                    })
                }
            }
        }
        this.progress()
    }

    onClose = () => {
        this.setState({
            isOpenDrawer: false,
        });
    };

    select(name,value){
        this.setState({
            [name]:value
        })
    }

    radio(value){
        this.setState({
            radio:value
        })
    }

    render(){
        return(
            <div className="my-order-wrap">
                <div className="my-order-header">
                    <p>订单</p>
                </div>
                <div className="my-order-content">
                    <Tabs className="order-tabs" defaultActiveKey={this.state.activeKey} onChange={(value)=>{this.setState({activeKey:value})}}>
                            <TabPane tab={<span>持仓<img onClick={(e)=>{e.stopPropagation();this.setState({isOpenDrawer:true})}} src={require("../../../layouts/image/shaixuan.png")} alt=""/></span>} key="1">
                            <ul>
                                {
                                    this.state.data.map((item, index) => {
                                        if(Date.parse(new Date()) >= Date.parse(new Date(item.time))+item.over*1000){
                                            return false
                                        }
                                        if(this.state.open[index]){
                                            return <li className="data" onClick={()=>{let open = this.state.open;open[index] = !this.state.open[index];this.setState({open})}} key={index}>
                                                <div className="order-info-header">
                                                <img src={item.img} alt=""/>
                                                <p>{item.name}</p>
                                                <span>开仓：{item.time}</span>
                                                </div>
                                                <table>
                                                <tbody>
                                                <tr>
                                                <td><span>金额</span></td>
                                                <td><span>{item.value.toFixed(2)}元</span></td>
                                                <td><span>方向</span></td>
                                                <td><span><Icon type={"arrow-"+item.direction} /></span></td>
                                                </tr>
                                                <tr>
                                                <td><span>拉霸抵扣</span></td>
                                                <td><span>{item.laba}元</span></td>
                                                <td><span>订单抵扣</span></td>
                                                <td><span>{item.order?item.order:"无"}</span></td>
                                                </tr>
                                                <tr>
                                                <td><span>执行价</span></td>
                                                <td><span>{item.execute}</span></td>
                                                <td><span>到期价</span></td>
                                                <td><span>{item.expire}</span></td>
                                                </tr>
                                                <tr>
                                                <td><span>时长</span></td>
                                                <td><span>{item.duration}秒</span></td>
                                                <td><span>收益率</span></td>
                                                <td><span>{item.rate}%</span></td>
                                                </tr>
                                                <tr>
                                                <td><span>到期时间</span></td>
                                                <td><span>{item.time}</span></td>
                                                <td><span>收益</span></td>
                                                <td><span>{item.up > 0?"+":""}{item.up}元</span></td>
                                                </tr>
                                                </tbody>
                                                </table>
                                            </li>
                                        }else {
                                            return <li className={"no-open"+index} onClick={()=>{let open = this.state.open;open[index] = !this.state.open[index];this.setState({open})}} key={index}>
                                                <img src={item.img} alt=""/>
                                                <div>
                                                    <Row>
                                                        <Col span={8}>
                                                            <span>{item.value.toFixed(2)}元</span>
                                                            <span className={item.up > 0? "red":"green"}>({item.up > 0?"+":""}{item.up}元)</span>
                                                        </Col>
                                                        <Col span={1}>
                                                        <span>
                                                            {item.up > 0?<Icon type="arrow-up" />:<Icon type="arrow-down" />}
                                                        </span>
                                                        </Col>
                                                        <Col span={3}>
                                                        <span>
                                                            {item.duration}秒
                                                        </span>
                                                        </Col>
                                                        <Col span={12}>
                                                        <span>
                                                            开仓：{item.time}
                                                        </span>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <span className={"progress progress"+index}>
                                                </span>
                                            </li>
                                        }
                                    })
                                }
                            </ul>
                        </TabPane>
                        <TabPane tab="结算" key="2">
                            <ul>
                                {
                                    this.state.data.map((item, index) => {
                                        if(this.state.open[index]){
                                            return <li className="data" onClick={()=>{let open = this.state.open;open[index] = !this.state.open[index];this.setState({open})}} key={index}>
                                                <div className="order-info-header">
                                                    <img src={item.img} alt=""/>
                                                    <p>{item.name}</p>
                                                    <span>开仓：{item.time}</span>
                                                </div>
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td><span>金额</span></td>
                                                        <td><span>{item.value.toFixed(2)}元</span></td>
                                                        <td><span>方向</span></td>
                                                        <td><span><Icon type={"arrow-"+item.direction} /></span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span>拉霸抵扣</span></td>
                                                        <td><span>{item.laba}元</span></td>
                                                        <td><span>订单抵扣</span></td>
                                                        <td><span>{item.order?item.order:"无"}</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span>执行价</span></td>
                                                        <td><span>{item.execute}</span></td>
                                                        <td><span>到期价</span></td>
                                                        <td><span>{item.expire}</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span>时长</span></td>
                                                        <td><span>{item.duration}秒</span></td>
                                                        <td><span>收益率</span></td>
                                                        <td><span>{item.rate}%</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span>到期时间</span></td>
                                                        <td><span>{item.time}</span></td>
                                                        <td><span>收益</span></td>
                                                        <td><span>{item.up > 0?"+":""}{item.up}元</span></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </li>
                                        }else {
                                            return <li onClick={()=>{let open = this.state.open;open[index] = !this.state.open[index];this.setState({open})}} key={index}>
                                                <img src={item.img} alt=""/>
                                                <div>
                                                    <Row>
                                                        <Col span={8}>
                                                            <span>{item.value.toFixed(2)}元</span>
                                                            <span className={item.up > 0? "red":"green"}>({item.up > 0?"+":""}{item.up}元)</span>
                                                        </Col>
                                                        <Col span={1}>
                                                        <span>
                                                            {item.up > 0?<Icon type="arrow-up" />:<Icon type="arrow-down" />}
                                                        </span>
                                                        </Col>
                                                        <Col span={3}>
                                                        <span>
                                                            {item.duration}秒
                                                        </span>
                                                        </Col>
                                                        <Col span={12}>
                                                        <span>
                                                            开仓：{item.time}
                                                        </span>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </li>
                                        }
                                    })
                                }
                            </ul>
                        </TabPane>
                    </Tabs>
                </div>
                <Drawer
                    className="order-drawer"
                    title={<span><span style={{marginRight: "3px"}}>筛</span><span>选</span></span>}
                    placement="right"
                    closable={false}
                    onClose={()=>this.onClose()}
                    visible={this.state.isOpenDrawer}
                >
                    <div className="futures-goods">
                        <div>
                            期货：
                        </div>
                        <div className="radio">
                            <span className={this.state.radio === "1"?"active":""} onClick={()=>{this.radio("1")}}>离岸人民币</span>
                            <span className={this.state.radio === "2"?"active":""} onClick={()=>{this.radio("2")}}>恒指</span>
                            <span className={this.state.radio === "3"?"active":""} onClick={()=>{this.radio("3")}}>德指</span>
                            <span className={this.state.radio === "0"?"active":""} onClick={()=>{this.radio("0")}}>其他</span>
                        </div>
                    </div>
                    <div className="profit">
                        <div>
                            盈亏：
                        </div>
                        <div>
                            <Select className="order-select" value={this.state.profit} style={{ width: 120 }} onChange={(value)=>this.select("profit",value)}>
                                <Option value="0">不限</Option>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="money">
                        <div>金额：</div>
                        <div>
                            <Select className="order-select" value={this.state.money} style={{ width: 120 }} onChange={(value)=>this.select("money",value)}>
                                <Option value="0">不限</Option>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="date">
                        <div>时间：</div>
                        <div>
                            <Select className="order-select" value={this.state.date} style={{ width: 120 }} onChange={(value)=>this.select("date",value)}>
                                <Option value="0">不限</Option>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <Button>查询</Button>
                        </div>
                    </div>
                </Drawer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {} = state;
    return {};
};
export default connect(mapStateToProps)(Order);
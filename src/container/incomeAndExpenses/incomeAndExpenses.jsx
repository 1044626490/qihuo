import React from "react"
import "./incomeAndExpenses.less"
import $ from "jquery"
import {Button, Icon, Tabs, Row, Col, Select} from "antd"
import { connect } from "react-redux";

const Option = Select.Option;
const TabPane = Tabs.TabPane;

class incomeAndExpenses extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date:"0",
            dates:"0",
            data:[
                {
                    img:require("../../layouts/image/cn.png"),
                    name: "离岸人民币-WFUSDCNH",
                    type: "0",
                    value: 182,
                    time: "2018-12-19 18:18:18"
                },
                {
                    img:require("../../layouts/image/cn.png"),
                    name: "离岸人民币-WFUSDCNH",
                    type: "0",
                    value: 182,
                    time: "2018-12-19 18:18:18"
                },
                {
                    img:require("../../layouts/image/german.png"),
                    name: "德指主连-CEDAXA0",
                    type: "1",
                    value: -100,
                    time: "2018-12-19 18:18:18"
                },
                {
                    img:require("../../layouts/image/cn.png"),
                    name: "离岸人民币-WFUSDCNH",
                    type: "0",
                    value: 182,
                    time: "2018-12-19 18:18:18"
                },
                {
                    img:require("../../layouts/image/cn.png"),
                    name: "离岸人民币-WFUSDCNH",
                    type: "1",
                    value: -200,
                    time: "2018-12-19 18:18:18"
                },
                {
                    img:require("../../layouts/image/cn.png"),
                    name: "恒指主连-HIHSIF",
                    type: "1",
                    value: -100,
                    time: "2018-12-19 18:18:18"
                },
                {
                    img:require("../../layouts/image/cn.png"),
                    name: "离岸人民币-WFUSDCNH",
                    type: "0",
                    value: 182,
                    time: "2018-12-19 18:18:18"
                },
                {
                    img:require("../../layouts/image/cn.png"),
                    name: "离岸人民币-WFUSDCNH",
                    type: "0",
                    value: 182,
                    time: "2018-12-19 18:18:18"
                },
                {
                    img:require("../../layouts/image/german.png"),
                    name: "德指主连-CEDAXA0",
                    type: "1",
                    value: -100,
                    time: "2018-12-19 18:18:18"
                },
                {
                    img:require("../../layouts/image/cn.png"),
                    name: "离岸人民币-WFUSDCNH",
                    type: "0",
                    value: 182,
                    time: "2018-12-19 18:18:18"
                },
            ]
        }
    }

    componentDidMount(){
        (() => {
            $(".income-expenses-container").on('scroll',() =>{
                if($(".income-expenses-container").scrollTop() >= 67){
                    $(".select-wrap").css({
                        position: "fixed",
                        top: "6.9vh",
                        left: "2.67vw",
                    })
                }else {
                    $(".select-wrap").removeAttr("style")
                }
            })
        })();
        $(".order-select").removeAttr("style")
    }

    select(name,value){
        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div className="income-expenses-wrap">
                <div className="my-info-header">
                    <Icon onClick={()=>{window.history.go(-1)}} type="left" />
                    <p>收支明细</p>
                </div>
                <div className="income-expenses-container">
                    <div className="container-content-header">
                        <div>
                            <span>2,222</span>
                            <span>累计收益&nbsp;(元)</span>
                        </div>
                        <div>
                            <span>2,000</span>
                            <span>累计提现&nbsp;(元)</span>
                        </div>
                        <div>
                            <span>222</span>
                            <span>账户余额&nbsp;(元)</span>
                        </div>
                    </div>
                    <div className="select-wrap">
                        <Select dropdownMatchSelectWidth={false} className="order-select" value={this.state.date} style={{ width: 120 }} onChange={(value)=>this.select("date",value)}>
                            <Option value="0">本月</Option>
                            <Option value="1">11111</Option>
                            <Option value="2">21111</Option>
                            <Option value="3">31111111</Option>
                        </Select>
                        <Select dropdownMatchSelectWidth={false} className="order-select" value={this.state.dates} style={{ width: 120 }} onChange={(value)=>this.select("dates",value)}>
                            <Option value="0">不限</Option>
                            <Option value="1">不限不限</Option>
                            <Option value="2">不限不限不限</Option>
                            <Option value="3">不限不限</Option>
                        </Select>
                        <p>
                            收入：1,222&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            支出：600
                        </p>
                    </div>
                    <div className="income-content">
                        <ul>
                            {
                                this.state.data.map((item, index) => {

                                    let date = item.time.split("-").join(".");
                                    return <li key={index} className="income-content-item">
                                        <img src={item.img} alt=""/>
                                        <p className="name-and-desc">
                                            <span>{item.name}</span>
                                            <span>{date}</span>
                                        </p>
                                        <span className={item.value > 0?"up":"down"}>{item.value > 0?"+":""}{item.value}</span>
                                    </li>
                                })
                            }
                        </ul>
                        <p className="no-item"><span>已到底部</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {} = state;
    return {};
};

export default connect(mapStateToProps)(incomeAndExpenses);
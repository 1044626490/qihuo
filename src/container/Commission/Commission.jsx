import React from "react"
import "./Commission.less"
import {Col, Icon, Row, Select, Tabs} from "antd";

const Option = Select.Option;
const TabPane = Tabs.TabPane;

class Commission extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data:
                {
                    tel:"18281725151",
                    registreDate:"2018-12-25 13:55:00",
                    level:1,
                    order:0,
                    orderAll:0,
                    commission:0,
                },
            activeKey:"1",
            isOpenDrawer:false,
        }
    }

    render(){
        const item = this.state.data;
        let date = this.state.data.registreDate.split("-").join(".");
        item.registreDate = date;
        return(
            <div className="commission-wrap">
                <div className="my-info-header">
                    <Icon onClick={()=>{window.history.go(-1)}} type="left" />
                    <p>佣金</p>
                </div>
                <div className="my-order-content">
                    <Tabs className="order-tabs" defaultActiveKey={this.state.activeKey} onChange={(value)=>{this.setState({activeKey:value})}}>
                        <TabPane tab="一级分佣" key="1">
                            <table>
                                <tbody>
                                <tr>
                                    <td><span>手机号</span></td>
                                    <td><span>{item.tel}</span></td>
                                    <td><span>注册时间</span></td>
                                    <td><span>{item.registreDate}</span></td>
                                </tr>
                                <tr>
                                    <td><span>级别</span></td>
                                    <td><span>{item.level}</span></td>
                                    <td><span>历史订单</span></td>
                                    <td><span>{item.order}笔</span></td>
                                </tr>
                                <tr>
                                    <td><span>订单总额</span></td>
                                    <td><span>{item.orderAll}</span></td>
                                    <td><span>佣金</span></td>
                                    <td><span>{item.commission}</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </TabPane>
                        <TabPane tab={<span>二级分佣<img onClick={(e)=>{e.stopPropagation();this.setState({isOpenDrawer:true})}} src={require("../../layouts/image/shaixuan.png")} alt=""/></span>} key="2">
                            <table>
                                <tbody>
                                <tr>
                                    <td><span>手机号</span></td>
                                    <td><span>{item.tel}</span></td>
                                    <td><span>注册时间</span></td>
                                    <td><span>{item.registreDate}</span></td>
                                </tr>
                                <tr>
                                    <td><span>级别</span></td>
                                    <td><span>{item.level}</span></td>
                                    <td><span>历史订单</span></td>
                                    <td><span>{item.order}笔</span></td>
                                </tr>
                                <tr>
                                    <td><span>订单总额</span></td>
                                    <td><span>{item.orderAll}</span></td>
                                    <td><span>佣金</span></td>
                                    <td><span>{item.commission}</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Commission
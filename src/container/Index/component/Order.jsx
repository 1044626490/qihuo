import React from "react"
import {Button, Icon, Tabs, Row, Col} from "antd"
import { connect } from "react-redux";
import "./Order.less"

const TabPane = Tabs.TabPane;

class Order extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeKey:"1"
        }
    }

    render(){
        const data = [
            {
                img: require("../../../layouts/image/cn.png"),
                value: 100,
                up: 182,
                duration: 42,
                time: "2018.12.19 18:18:18"
            },
            {
                img: require("../../../layouts/image/hongkong.png"),
                value: 500,
                up: 375,
                duration: 192,
                time: "2018.12.19 18:18:18"
            },
            {
                img: require("../../../layouts/image/cn.png"),
                value: 100,
                up: -100,
                duration: 24,
                time: "2018.12.19 18:18:18"
            },
            {
                img: require("../../../layouts/image/cn.png"),
                value: 100,
                up: 182,
                duration: 50,
                time: "2018.12.19 18:18:18"
            },
        ];
        return(
            <div className="my-order-wrap">
                <div className="my-order-header">
                    <p>订单</p>
                </div>
                <div className="my-order-content">
                    <Tabs className="order-tabs" defaultActiveKey={this.state.activeKey} onChange={(value)=>{this.setState({activeKey:value})}}>
                        <TabPane tab="持仓" key="1">
                            <div className="order-info-header">
                                <img src={require("../../../layouts/image/cn.png")} alt=""/>
                                <p>离岸人民币-WFUSDCNH</p>
                                <span>开仓：2018.12.19 18:18:18</span>
                            </div>
                            <table>
                                <tbody>
                                <tr>
                                    <td><span>金额</span></td>
                                    <td><span>100.00元</span></td>
                                    <td><span>方向</span></td>
                                    <td><span><Icon type="arrow-down" /></span></td>
                                </tr>
                                <tr>
                                    <td><span>拉霸抵扣</span></td>
                                    <td><span>0.00元</span></td>
                                    <td><span>订单抵扣</span></td>
                                    <td><span>无</span></td>
                                </tr>
                                <tr>
                                    <td><span>执行价</span></td>
                                    <td><span>25852</span></td>
                                    <td><span>到期价</span></td>
                                    <td><span>25849</span></td>
                                </tr>
                                <tr>
                                    <td><span>时长</span></td>
                                    <td><span>60秒</span></td>
                                    <td><span>收益率</span></td>
                                    <td><span>82%</span></td>
                                </tr>
                                <tr>
                                    <td><span>到期时间</span></td>
                                    <td><span>2018.12.19 18:18:18</span></td>
                                    <td><span>收益</span></td>
                                    <td><span>+182元</span></td>
                                </tr>
                                </tbody>
                            </table>
                            <ul>
                                {
                                    data.map((item, index) => {
                                        return <li key={index}>
                                            <img src={item.img} alt=""/>
                                            <p>
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
                                            </p>
                                        </li>
                                    })
                                }
                            </ul>
                        </TabPane>
                        <TabPane tab="结算" key="2">
                            <div className="order-info-header">
                                <img src={require("../../../layouts/image/cn.png")} alt=""/>
                                <p>离岸人民币-WFUSDCNH</p>
                                <span>开仓：2018.12.19 18:18:18</span>
                            </div>
                            <table>
                                <tbody>
                                <tr>
                                    <td><span>金额</span></td>
                                    <td><span>100.00元</span></td>
                                    <td><span>方向</span></td>
                                    <td><span><Icon type="arrow-down" /></span></td>
                                </tr>
                                <tr>
                                    <td><span>拉霸抵扣</span></td>
                                    <td><span>0.00元</span></td>
                                    <td><span>订单抵扣</span></td>
                                    <td><span>无</span></td>
                                </tr>
                                <tr>
                                    <td><span>执行价</span></td>
                                    <td><span>25852</span></td>
                                    <td><span>到期价</span></td>
                                    <td><span>25849</span></td>
                                </tr>
                                <tr>
                                    <td><span>时长</span></td>
                                    <td><span>60秒</span></td>
                                    <td><span>收益率</span></td>
                                    <td><span>82%</span></td>
                                </tr>
                                <tr>
                                    <td><span>到期时间</span></td>
                                    <td><span>2018.12.19 18:18:18</span></td>
                                    <td><span>收益</span></td>
                                    <td><span>+182元</span></td>
                                </tr>
                                </tbody>
                            </table>
                            <ul>
                                {
                                    data.map((item, index) => {
                                        return <li key={index}>
                                            <img src={item.img} alt=""/>
                                            <p>
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
                                            </p>
                                        </li>
                                    })
                                }
                            </ul>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {  } = state;
    return {  };
};
export default connect(mapStateToProps)(Order);
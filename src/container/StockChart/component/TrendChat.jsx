import React from "react"
import connect from "react-redux/es/connect/connect";
import { Row, Col, Tabs, Button } from "antd"
import "./TrendChat.less"
import TimeShareChart from "./chart/TimeShareChart"
import FiveMinutesChart from "./chart/FiveMinutesChart"

const TabPane = Tabs.TabPane;

class TrendChat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeKey:"1"
        }
    }

    // componentDidUpdate(){
    //
    // }
    //
    // componentDidMount(){
    //     let fiveMinutesChart = echarts.init(document.getElementById('five-minutes-chart'));
    // }

    render(){
        return(
            <div className="trend-chart-wrap">
                <div className="trend-chart-header">
                    <p>
                        <span>离岸人民币</span>
                        <span>1768</span>
                        <p>
                            <p>+122</p>
                            <p>-0.55%</p>
                        </p>
                    </p>
                </div>
                <div className="apply-and-sell">
                    <p>
                        <p>
                            <span>买价</span>
                            <span>2066</span>
                        </p>
                        <p>
                            <span>卖价</span>
                            <span>2166</span>
                        </p>
                        <p>
                            <span>最高价</span>
                            <span>2222</span>
                        </p>
                        <p>
                            <span>最低价</span>
                            <span>1922</span>
                        </p>
                    </p>
                </div>
                <div id="trend-chart-content">
                    <Tabs className="trend-chart-tabs" defaultActiveKey={this.state.activeKey} onChange={(value)=>{this.setState({activeKey:value})}}>
                        <TabPane tab="分时图" key="1">
                            <TimeShareChart />
                        </TabPane>
                        <TabPane tab="5分钟" key="2">
                            <FiveMinutesChart />
                        </TabPane>
                    </Tabs>
                </div>
                <div className="trend-chart-footer">
                    <div>
                        <img src={require("../../../layouts/image/chongzhi.png")} alt=""/>
                        <p>
                            <span>可用资金(元)</span>
                            <span>1234.00</span>
                        </p>
                        <Button>充值</Button>
                    </div>
                    <p>交易中（交易时间07：00-次日05：45）</p>
                    <div>
                        <span>买涨1234.00</span>
                        <span>
                            <img src={require("../../../layouts/image/xiadan.png")} alt=""/>
                            <span>
                                闪电下单
                            </span>
                        </span>
                        <span>买跌1234.00</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {  } = state;
    return {  };
};
export default connect(mapStateToProps)(TrendChat);
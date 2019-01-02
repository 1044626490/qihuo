import React from "react"
import {Icon, Button, Row, Col, DatePicker, Radio, message, Tabs} from "antd"
import moment from "moment";
import Highcharts from 'highcharts'
import $ from "jquery"
import "./StockChart.less"
import Api from "../../until/api"
import connect from "react-redux/es/connect/connect";
import TrendChat from "./component/TrendChat"

const TabPane = Tabs.TabPane;

class StockChart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeKey:"1"
        }
    }

    render(){
        return(
            <div id="stock-chart-wrap">
                <div className="my-info-header">
                    <Icon onClick={()=>{window.history.go(-1)}} type="left" />
                    <p>
                        离岸人民币
                    </p>
                </div>
                <div className="my-order-content">
                    <Tabs className="order-tabs" defaultActiveKey={this.state.activeKey} onChange={(value)=>{this.setState({activeKey:value})}}>
                        <TabPane tab="走势" key="1">
                            <TrendChat />
                        </TabPane>
                        <TabPane tab="持仓" key="2">
                        </TabPane>
                        <TabPane tab="结算" key="3">
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
export default connect(mapStateToProps)(StockChart);
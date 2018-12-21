import React from "react"
import {Button ,Tabs } from "antd"
import "./Index.less"
import FirstPage from "./component/FirstPage"
import Me from "./component/Me"
import Order from "./component/Order"

const TabPane = Tabs.TabPane;

class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeKey:this.props.activeKey
        }
    }

    render(){
        const activeKey = this.props.activeKey;
        return(
            <div id="qihuo-wrap">
                <Tabs className="qihuo-index-tab" defaultActiveKey={this.props.activeKey} onChange={(value)=>this.props.onChange(value)}>
                    <TabPane tab={<span><img src={activeKey === "1"?require("../../layouts/image/index1.png")
                        :require("../../layouts/image/index2.png")} alt=""/>首页</span>} key="1">
                        {
                            this.props.activeKey === "1"?<FirstPage />:null
                        }
                        </TabPane>
                    <TabPane tab={<span><img src={activeKey === "2"?require("../../layouts/image/order1.png")
                        :require("../../layouts/image/order2.png")} alt=""/>订单</span>} key="2">
                        {
                            this.props.activeKey === "2"?<Order />:null
                        }
                        </TabPane>
                    <TabPane tab={<span><img src={activeKey === "3"?require("../../layouts/image/me1.png")
                        :require("../../layouts/image/me2.png")} alt=""/>我的</span>} key="3">
                        {
                            this.props.activeKey === "3"?<Me />:null
                        }
                        </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Index
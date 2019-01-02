import React from "react"
import "./rePassword.less"
import {Icon, Tabs} from "antd";
import connect from "react-redux/es/connect/connect";
import RePassword from "./compoent/rePassword";
import PhonePassword from "./compoent/PhonePassword";

const TabPane = Tabs.TabPane;

class RePasswordIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeKey:"1"
        }
    }

    render(){
        return(
            <div className="login-wrap">
                <div className="my-info-header">
                    <Icon onClick={()=>{window.history.go(-1)}} type="left" />
                    <p>{this.state.activeKey === "1"?"修改交易密码":"重置交易密码"}</p>
                </div>
                <Tabs className="order-tabs" defaultActiveKey={this.state.activeKey} onChange={(value)=>{this.setState({activeKey:value})}}>
                    <TabPane tab="修改交易密码" key="1">
                        <RePassword />
                    </TabPane>
                    <TabPane tab="重置交易密码" key="2">
                        <PhonePassword />
                    </TabPane>
                </Tabs>
                <img src={require("../../layouts/image/db.png")} alt=""/>
            </div>
        )
    }
}

export default RePasswordIndex
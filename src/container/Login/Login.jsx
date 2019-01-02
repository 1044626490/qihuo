import React from "react"
import "./Login.less"
import {Icon, Tabs} from "antd";
import connect from "react-redux/es/connect/connect";
import Login from "./compoent/Login";
import Register from "./compoent/Register";

const TabPane = Tabs.TabPane;

class LoginIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeKey:"2"
        }
    }

    render(){
        return(
            <div className="login-wrap">
                <div className="my-info-header">
                    <Icon onClick={()=>{window.history.go(-1)}} type="left" />
                    <p>{this.state.activeKey === "1"?"用户登录":"用户注册"}</p>
                </div>
                <Tabs className="order-tabs" defaultActiveKey={this.state.activeKey} onChange={(value)=>{this.setState({activeKey:value})}}>
                    <TabPane tab="登录" key="1">
                        <Login />
                    </TabPane>
                    <TabPane tab="注册" key="2">
                        <Register />
                    </TabPane>
                </Tabs>
                <img src={require("../../layouts/image/db.png")} alt=""/>
            </div>
        )
    }
}

export default LoginIndex
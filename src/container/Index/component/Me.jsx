import React from "react"
import {Button, Icon } from "antd"
import { connect } from "react-redux";
import "./Me.less"

class Me extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLogin:true,
            isOpenMyTwo:false
        }
    }

    render(){
        const data = [
            // {
            //     name: "账户充值",
            //     img: require("../../../layouts/image/charge.png"),
            //     callback: ()=>{}
            // },
            {
                name: "收支明细",
                img: require("../../../layouts/image/income.png"),
                callback: ()=>{window.location.href = "#/Dashboard/incomeAndExpenses"}
            },{
                name: "佣金详情",
                img: require("../../../layouts/image/money.png"),
                callback: ()=>{window.location.href = "#/Dashboard/Commission"}
            },{
                name: "二维码",
                img: require("../../../layouts/image/two.png"),
                callback: ()=>{this.setState({isOpenMyTwo:true})}
            },{
                name: "软件下载",
                img: require("../../../layouts/image/download.png"),
                callback: ()=>{window.location.href = "#/Dashboard/DownloadApp"}
            },{
                name: "问题反馈",
                img: require("../../../layouts/image/feedback.png"),
                callback: ()=>{window.location.href = "#/Dashboard/Feedback"}
            },{
                name: "绑定银行卡",
                img: require("../../../layouts/image/bank.png"),
                callback: ()=>{window.location.href = "#/Dashboard/TiedCard"}
            },{
                name: "修改交易密码",
                img: require("../../../layouts/image/repwd.png"),
                callback: ()=>{window.location.href= "#/Dashboard/ReDealPasswordIndex"}
            },{
                name: "退出账户",
                img: require("../../../layouts/image/outlogin.png"),
                callback: ()=>{}
            },

        ];
        return(
            <div className="my-info-wrap">
                <div className="my-info-header">
                    <p>
                        我的
                    </p>
                </div>
                {
                    this.state.isOpenMyTwo?<div className="my-two-pic" onClick={()=>{this.setState({isOpenMyTwo:false})}}>
                        <div className="my-two-pic-content">
                            <img src="" alt=""/>
                        </div>
                    </div>:null
                }
                <div className="my-info-avatar">
                    <img src={this.state.isLogin?require("../../../layouts/image/avatar.png"):require("../../../layouts/image/noavatar.png")} alt=""/>
                    {
                        this.state.isLogin?<p>
                            <span>画里的世界321</span>
                            <span>182****8888</span>
                        </p>:<p className="login-button">
                            <Button>登录/注册</Button>
                        </p>
                    }
                </div>
                <div className="my-money">
                    <p>
                        {this.state.isLogin?<span>255.55</span>:<span className="no-login-money">--</span>}
                        <span  className={this.state.isLogin?"":"no-login-money"}>账户余额</span>
                    </p>
                    <p>
                        <Button onClick={()=>{window.location.href = "#/Dashboard/chargeAndWithdrawDeposit/1"}}>充值</Button>
                        <Button onClick={()=>{window.location.href = "#/Dashboard/chargeAndWithdrawDeposit/2"}}>提现</Button>
                    </p>
                </div>
                <ul>
                    {
                        data.map((item, index) =>{
                            return <li key={index} onClick={()=>item.callback()}>
                                <img src={item.img} alt=""/>
                                <p>{item.name}<span></span></p>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {userInfo} = state;
    return {userInfo};
};
export default connect(mapStateToProps)(Me);
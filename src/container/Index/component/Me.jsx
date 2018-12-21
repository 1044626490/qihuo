import React from "react"
import {Button, Icon } from "antd"
import { connect } from "react-redux";
import "./Me.less"

class Me extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        const data = [
            {
                name: "账户充值",
                img: require("../../../layouts/image/charge.png"),
                callback: ()=>{}
            },{
                name: "收支明细",
                img: require("../../../layouts/image/income.png"),
                callback: ()=>{}
            },{
                name: "佣金详情",
                img: require("../../../layouts/image/money.png"),
                callback: ()=>{}
            },{
                name: "二维码",
                img: require("../../../layouts/image/two.png"),
                callback: ()=>{}
            },{
                name: "软件下载",
                img: require("../../../layouts/image/download.png"),
                callback: ()=>{}
            },{
                name: "问题反馈",
                img: require("../../../layouts/image/feedback.png"),
                callback: ()=>{}
            },{
                name: "修改交易密码",
                img: require("../../../layouts/image/repwd.png"),
                callback: ()=>{}
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
                <div className="my-info-avatar">
                    <img src={require("../../../layouts/image/avatar.png")} alt=""/>
                    <p>
                        <span>画里的世界321</span>
                        <span>182****8888</span>
                    </p>
                </div>
                <div className="my-money">
                    <p>
                        <span>255.55</span>
                        <span>账户余额</span>
                    </p>
                    <p>
                        <span>255.55</span>
                        <span>账户余额</span>
                    </p>
                </div>
                <ul>
                    {
                        data.map((item, index) =>{
                            return <li key={index}>
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
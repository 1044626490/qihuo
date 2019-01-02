import React from "react"
import {Button, Icon } from "antd"
import { connect } from "react-redux";
import "./FirstPage.less"
import $ from "jquery"

class FirstPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLogin:true,
            news:[
                {
                    time: "2018-08-10 12:55:31",
                    news: "幸运大转盘活动即将结束"
                }
            ]
        }
    }

    componentDidMount(){
        let setI = setInterval(()=>{
            this.Carousel()
        },3000)
    }

    Carousel(){
        let news = this.state.news;
        news.push({
            time: "2018-08-10 12:55:31",
            news: Math.random().toFixed(10)
        });
        this.setState({
            news
        });
    }

    componentDidUpdate(){
        $(".notice-wrap").animate({
            top: "-"+(this.state.news.length*4-4)+"vh"
        },300)
    }

    render(){
        const data = [
            {
                img:require("../../../layouts/image/cn.png"),
                name: "离岸人民币-WFUSDCNH",
                desc: "火爆玩法，可买涨可买跌",
                newPrice: 33333.33,
                upOrDown: 11.22,
            },
            {
                img: require("../../../layouts/image/hongkong.png"),
                name: "恒指主连-HHSIF",
                desc: "投资小，见效快，双向交易",
                newPrice: 33333.33,
                upOrDown: -11.22,
            },
            {
                img: require("../../../layouts/image/german.png"),
                name: "德指主连-CEDAXAO",
                desc: "火爆玩法，可买涨可买跌",
                newPrice: 33333.33,
                upOrDown: 11.22,
            }
        ];
        const data1 = [
            {
                img: require("../../../layouts/image/hongkong.png"),
                name: "恒指主连-HHSIF",
                desc: "投资小，见效快，双向交易",
                newPrice: 33333.33,
                upOrDown: -11.22,
            },{
                img: require("../../../layouts/image/hongkong.png"),
                name: "恒指主连-HHSIF",
                desc: "投资小，见效快，双向交易",
                newPrice: 33333.33,
                upOrDown: -11.22,
            }
        ]
        return(
            <div className="first-page-wrap">
                <div className="first-page-header">
                    <img src={require("../../../layouts/image/login.png")} alt=""/>
                    <img src={require("../../../layouts/image/msg.png")} alt=""/>
                    <p>
                        {
                            this.state.isLogin?<span>8,888.88</span>:<span><Button>登陆/注册</Button></span>
                        }
                        <span>资产总额&nbsp;&nbsp;(元)</span>
                    </p>
                    <div>
                        <p>
                            {
                                this.state.isLogin?<span className="no-login-money">52.22</span>:<span className="no-login-money">--</span>
                            }
                            <span>昨日收益&nbsp;&nbsp;(元)</span>
                        </p>
                        <p>
                            {
                                this.state.isLogin?<span className="no-login-money">52.22</span>:<span className="no-login-money">--</span>
                            }
                            <span>累计收益&nbsp;&nbsp;(元)</span>
                        </p>
                    </div>
                </div>
                <div className="first-page-container">
                    <div className="first-page-notice">
                        <p className="notice-wrap">
                            {
                                this.state.news.map((item, index) => {
                                    return <span key={index}>公告：{item.time}{item.news}</span>
                                })
                            }
                        </p>
                    </div>
                    <div className="first-page-content">
                        <p className="title">
                            <span>优选项目</span>
                        </p>
                        <ul>
                            {
                                data.map((item, index) => {
                                    console.log(item.upOrDown,item.upOrDown > 0);
                                    return <li key={index}>
                                        <img src={item.img} alt=""/>
                                        <p className="name-and-desc">
                                            <span>{item.name}</span>
                                            <span>{item.desc}</span>
                                        </p>
                                        <p className={item.upOrDown > 0 ? "new-price up":"new-price"}>
                                            <span>{item.newPrice}</span>
                                            <span>最新价</span>
                                        </p>
                                        <p className={item.upOrDown > 0 ? "new-price up":"new-price"}>
                                            <span>{(item.upOrDown > 0? "+":"")+item.upOrDown}%</span>
                                            <span>涨跌幅</span>
                                        </p>
                                    </li>
                                })
                            }
                        </ul>
                        <p className="title">
                            <span>推荐项目</span>
                        </p>
                        <ul>
                            {
                                data1.map((item, index) => {
                                    console.log(item.upOrDown,item.upOrDown > 0);
                                    return <li key={index}>
                                        <img src={item.img} alt=""/>
                                        <p className="name-and-desc">
                                            <span>{item.name}</span>
                                            <span>{item.desc}</span>
                                        </p>
                                        <p className={item.upOrDown > 0 ? "new-price up":"new-price"}>
                                            <span>{item.newPrice}</span>
                                            <span>最新价</span>
                                        </p>
                                        <p className={item.upOrDown > 0 ? "new-price up":"new-price"}>
                                            <span>{(item.upOrDown > 0? "+":"")+item.upOrDown}%</span>
                                            <span>涨跌幅</span>
                                        </p>
                                    </li>
                                })
                            }
                        </ul>
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
export default connect(mapStateToProps)(FirstPage);
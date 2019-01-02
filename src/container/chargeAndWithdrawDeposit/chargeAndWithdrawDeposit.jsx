import React from "react"
import "./chargeAndWithdrawDeposit.less"
import {Icon, Button} from "antd";

class chargeAndWithdrawDeposit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            data1:[0,0,0,0,0,0,0,0],
            data2:[0,0],
        }
    }

    checkMoney(index){
        let data1 = this.state.data1
        for(let i=0;i<data1.length;i++){
            data1[i] = 0
        }
        data1[index] = 1;
        this.setState({
            data1
        })
    }

    check(index){
        let data2 = this.state.data2
        for(let i=0;i<data2.length;i++){
            data2[i] = 0
        }
        data2[index] = 1;
        this.setState({
            data2
        })
    }

    render(){
        const data1 = [100,200,300,500,1000,2000,3000,5000];
        const data2 = [require("../../layouts/image/alipay.png"),require("../../layouts/image/bank11.png")];
        return(
            <div className="charge-withdraw-deposit">
                <div className="my-info-header">
                    <Icon onClick={()=>{window.history.go(-1)}} type="left" />
                    <p>{this.state.id === "1"?"账户充值":"账户提现"}</p>
                </div>
                <div className="content">
                    <div>
                        <div>
                            <span>{this.state.id==="1"?"充值金额":"提现金额"}：</span>
                        </div>
                        <div>
                            {
                                data1.map((item,index) => {
                                    return <span className={this.state.data1[index]?"active":""} onClick={()=>this.checkMoney(index)} key={index}>{item}</span>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div><span><span>{this.state.id==="1"?"支付方式":"提现账户"}：</span></span></div>
                        <div>
                            {
                                data2.map((item,index) => {
                                    return <span className={this.state.data2[index]?"active":""} onClick={()=>this.check(index)} key={index}><img src={item} alt=""/></span>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>
                                {this.state.id==="1"?"支付方式":"提现账户"}：
                            </span>
                        </div>
                        <div>
                            <Button>{this.state.id === "1"?"充值":"提现"}</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default chargeAndWithdrawDeposit
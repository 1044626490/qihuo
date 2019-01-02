import React from "react"
import "./withdrawDeposit.less"
import {Button, Form, Icon, Input, Select, InputNumber } from "antd";
import { InputItem } from "antd-mobile"
import $ from "jquery"

const FormItem = Form.Item;
const { Option } = Select;
class withdrawDeposit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login:{
                name:"张三",
                IDcard:"510125199912122222",
                bank:"中国工商银行",
                city:"四川省 成都市",
                subbranchOfABank:"成都市青羊支行",
                cardNum:"6228480488712212676",
                money:this.props.match.params.money,
                getMoney:(Number(this.props.match.params.money)*0.99).toFixed(2),
                tel:13666666666,
                password:123456,
                code:null,
            },
            loginForm:[
                {
                    key:"name",
                    name:"收款人",
                    required:true,
                    message:"",
                    placeholder:"",
                    before:null,
                    isOk:"success",
                    type:"input",
                    disabled:true
                },
                {
                    key:"IDcard",
                    name:"身份证号",
                    required:true,
                    message:"",
                    placeholder:"",
                    before:null,
                    isOk:"success",
                    re:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                    type:"input",
                    defaultValue:"",
                    disabled:true
                },
                {
                    key:"bank",
                    name:"开户银行",
                    required:true,
                    message:"",
                    placeholder:"",
                    before:null,
                    isOk:"success",
                    type:"input",
                    defaultValue:"",
                    disabled:true
                },
                {
                    key:"city",
                    name:"开户城市",
                    required:true,
                    message:"",
                    placeholder:"",
                    before:null,
                    isOk:"success",
                    type:"input",
                    defaultValue:"",
                    disabled:true
                },
                {
                    key:"subbranchOfABank",
                    name:"开户支行",
                    required:true,
                    message:"请输入支行名称",
                    placeholder:"请输入支行名称",
                    before:null,
                    isOk:"success",
                    type:"input",
                    defaultValue:"",
                    disabled:true
                },
                {
                    key:"cardNum",
                    name:"银行卡号",
                    required:true,
                    message:"请输入银行卡号",
                    placeholder:"请输入银行卡号",
                    before:null,
                    isOk:"success",
                    type:"input",
                    defaultValue:"",
                    disabled:true
                },
                {
                    key:"money",
                    name:"提现金额",
                    required:true,
                    message:"请输入提现金额",
                    placeholder:"请输入提现金额",
                    before:null,
                    isOk:"success",
                    type:"input",
                    defaultValue:this.props.match.params.money,
                    disabled:true
                },
                {
                    key:"getMoney",
                    name:"实际到账",
                    required:true,
                    message:"请输入提现金额",
                    placeholder:"请输入提现金额",
                    before:null,
                    isOk:"success",
                    type:"input",
                    defaultValue:"",
                    disabled:true
                },
                {
                    key:"tel",
                    name:"手机号",
                    required:true,
                    message:"请输入银行预留手机号",
                    placeholder:"请输入银行预留手机号",
                    before:null,
                    isOk:"success",
                    re:/^1[3456789]\d{9}$/,
                    type:"input",
                    defaultValue:"",
                    disabled:true
                },
                {
                    key:"password",
                    name:"交易密码",
                    required:true,
                    message:"请输入交易密码",
                    placeholder:"请输入交易密码",
                    before:null,
                    isOk:"success",
                    re:/^.{6,}$/,
                    type:"input",
                    defaultValue:"",
                    disabled:false
                },
                {
                    key:"code",
                    name:"验证码",
                    required:true,
                    message:"请输入短信验证码",
                    placeholder:"请输入短信验证码",
                    before:null,
                    isOk:"",
                    type:"input",
                    defaultValue:"",
                    disabled:false
                },
            ],
        }
    }

    changeInput = (e, item, index, name1) => {
        let value =item.type === "InputNumber"?e:e.target.value;
        let arr = this.state.loginForm;
        let name2 = "loginForm";
        let name = item.key;
        let form = this.state[name1];
        if(item.re){
            if(item.re.test(value)){
                arr[index].isOk = "success";
                form[name] = value;
            }else {
                arr[index].isOk = "error";
            }
        }else {
            if(value === ""||!value){
                arr[index].isOk = "error";
            }else {
                form[name] = value;
                arr[index].isOk = "success";
            }
        }
        if(item.key === "newpassword"){
            if(value !== this.state.register.password){
                arr[index].isOk = "error";
            }else {
                arr[index].isOk = "success";
            }
        }
        if(item.key === "money"){
            form.getMoney = (Number(value)*0.99).toFixed(2);
            $(".get-money").removeProp("disabled");
            $(".get-money").val(form.getMoney);
            $(".get-money").prop("disabled",true);
            if(isNaN(Number(value))||Number(value) === 0){
                arr[index].isOk = "error";
            }
            this.setState({
                [name2]:arr,
                [name1]:form
            })
        }else {
            this.setState({
                [name2]:arr,
                [name1]:form
            })
        }
    };

    getButtonClass(){
        let className = "check-button login-botton";
        let arr = this.state.loginForm;
        let count = 0;
        for(let i=0;i<arr.length;i++){
            if(!arr[i].item){
                if(arr[i].isOk === "error"||arr[i].isOk === ""){
                    count++;
                    className = "check-button login-botton button-disabled"
                }
            }else {
                for(let j=0;j<arr[i].item.length;j++){
                    if(arr[i].isOk === "error"||arr[i].isOk === ""){
                        count++;
                        className = "check-button login-botton button-disabled"
                    }
                }
            }
        }
        return className
    }

    formCreate(item,index){
        switch (item.type) {
            case "input":
                return <div>
                    <span>{item.name}</span>
                    <Input type={item.key === "password"?"password":"text"}
                           onChange={(e)=>this.changeInput(e,item,index,"login")}
                           defaultValue={this.state.login[item.key]}
                           placeholder={item.placeholder}
                           disabled={item.disabled}
                           id={item.isOk}
                           className={item.key === "getMoney"?"get-money":""}
                    />
                    {
                        item.key === "code"? <span onClick={()=>this.getKaptchald()} className="get-kaptchald" type="primary">获取验证码</span>
                            :null
                    }
                </div>;
                break;
            case "InputNumber":
                return <div>
                    <span>{item.name}</span>
                    <InputNumber  type="number"
                           onChange={(e)=>this.changeInput(e,item,index,"login")}
                           defaultValue={this.state.login[item.key]}
                           placeholder={item.placeholder}
                           disabled={item.disabled}
                           id={item.isOk}
                           className={item.key === "getMoney"?"get-money":""}
                    />
                    {
                        item.key === "code"? <span onClick={()=>this.getKaptchald()} className="get-kaptchald" type="primary">获取验证码</span>
                            :null
                    }
                </div>;
                break;
            default:
                break;
        }
    }

    render(){
        return(
            <div className="withdraw-deposit-wrap">
                <div className="my-info-header">
                    <Icon onClick={()=>{window.history.go(-1)}} type="left" />
                    <p>提现信息</p>
                </div>
                <div className="bank-card-wrap">
                    <p className="title">
                        <span>收款信息</span>
                    </p>
                <Form>
                    {
                        this.state.loginForm.map((item, index)=>{
                            if(index === 7){
                                return <FormItem
                                    required
                                    hasFeedback
                                    validateStatus={item.key !== "code"?item.isOk:""}
                                    help={item.isOk === "error"?item.message:null}
                                    key={item.key}
                                >
                                    {item.before}{this.formCreate(item,index)}
                                    <p className="title">
                                        <span>验证信息</span>
                                    </p>
                                </FormItem>
                            }else {
                                return <FormItem
                                    required
                                    hasFeedback
                                    validateStatus={item.key !== "code"?item.isOk:""}
                                    help={item.isOk === "error"?item.message:null}
                                    key={item.key}
                                >
                                    {item.before}{this.formCreate(item,index)}
                                </FormItem>
                            }
                        })
                    }
                    <FormItem>
                        <Button onClick={()=>this.handleSubmit()} className={this.getButtonClass()} type="primary">绑定银行卡</Button>
                    </FormItem>
                </Form>
                    <p><span>*</span>注：提现单笔最少100元，最大5000元，手续费1%收取</p>
            </div>
            </div>
        )
    }
}

export default withdrawDeposit
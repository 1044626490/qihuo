import React from "react"
import "./Register.less"
import { message, Icon, Form, Button, Input } from "antd";
import connect from "react-redux/es/connect/connect";

const FormItem = Form.Item;

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            register:{
                tel:null,
                password:null,
                newpassword:null,
                code:null
            },
            Register:[
                {
                    key:"tel",
                    name:"tel",
                    required:true,
                    message:"请输入电话号码",
                    placeholder:"电话号码",
                    isOk:"",
                    before:<Icon className="before-icon" type="user" theme="outlined" />,
                    re:/^1[3456789]\d{9}$/,
                },
                {
                    key:"password",
                    name:"password",
                    required:true,
                    message:"请输入用户密码",
                    placeholder:"用户密码(长度不能低于6位)",
                    isOk:"",
                    re:/^.{6,}$/,
                    before:<Icon className="before-icon" type="lock" theme="outlined" />
                },
                {
                    key:"newpassword",
                    name:"newpassword",
                    required:true,
                    message:"请确认密码",
                    placeholder:"确认密码",
                    isOk:"",
                    before:<Icon className="before-icon" type="lock" theme="outlined" />
                },
                {
                    key:"code",
                    name:"code",
                    required:true,
                    message:"请输入验证码",
                    placeholder:"验证码",
                    isOk:"",
                    before:<Icon className="before-icon" type="safety-certificate" theme="outlined" />
                }
            ],
            isCheck:false
        }
    }

    handleSubmit = (name) => {
        let count = 0;
        if(name === "bindPhone"){
            this.state.Register.map((item, index)=>{
                if(item.isOk === "error"){
                    count ++
                }
            });
        }else if(name === "forgetPWD"){
            this.state.Register.map((item, index)=>{
                if(item.isOk === "error"){
                    count ++
                }
            });
        }else {
            this.state[name].map((item, index)=>{
                if(item.isOk === "error"){
                    count ++
                }
            });
        }
        if(count > 0){
            message.error("信息填写错误");
            return false
        }
        let params = name === "loginForm"?this.state.login:this.state.register;
        if(name === "Register"){
            params.refer_id = localStorage.getItem("uid")
        }else if(name === "bindPhone"){
            params.openid = localStorage.getItem("oid")
        }
        // name === "loginForm"?this.props.dispatch(fetchPostsIfNeeded(params)).then((res) => {
        //     if(res.code ==="0000"){
        //         localStorage.setItem("phoneNum",this.state.login.tel)
        //         localStorage.setItem("pwd",this.state.login.password)
        //         message.success(res.msg);
        //         sessionStorage.setItem("key",'2');
        //         this.getUserInfo()
        //     }
        //     localStorage.removeItem("uid")
        // }).catch((err) => {
        //     message.error(err.msg);
        // }):name === "Register"?Api.register(params).then((res)=>{
        //     message.success(res.msg);
        //     this.setState({
        //         loginLocation:"2"
        //     })
        //     localStorage.removeItem("uid")
        // }).catch((err)=>{
        //     message.error(err.msg)
        // }):name === "bindPhone"?Api.bindPhone(params).then(res => {
        //     message.success(res.msg)
        //     this.setState({
        //         isWxBindPhone:false
        //     })
        //     this.getUserInfo()
        // }).catch(err => {
        //     message.warning(err.msg)
        // }):Api.forgetPassword(params).then(res => {
        //     message.success((res.msg));
        //     this.setState({
        //         isForget:false
        //     })
        // }).catch(err=>{
        //     message.warning(err.msg)
        // })
        //bindPhone
    };

    getKaptchald(isBind){
        let tel = this.state.register.tel;
        let re = /^1[345789]\d{9}$/;
        if(isBind === "bindPhone"){
            // Api.bindSendVerifiCode({tel}).then((res)=>{
            //     message.success(res.msg);
            // }).catch((res)=>{
            //     message.error(res.msg);
            // })
        }else if(isBind === "forgetPWD"){
            // Api.forgetSendVerifiCode({tel}).then((res)=>{
            //     message.success(res.msg);
            // }).catch((res)=>{
            //     message.error(res.msg);
            // })
        }else {
            if(re.test(tel)){
                // Api.sendVerifiCode({tel}).then((res)=>{
                //     message.success(res.msg);
                // }).catch((res)=>{
                //     message.error(res.msg);
                // })
            }
        }
    }

    changeInput = (e, item, index, name1) => {
        let value =e.target.value;
        let arr = name1 === "login"?this.state.loginForm:this.state.Register;
        let name2 = name1 === "login"?"loginForm":"Register";
        let name = item.key;
        let form = this.state[name1];
        if(item.re){
            if(item.re.test(value)){
                arr[index].isOk = "success";
                form[name] = value;
            }else {
                form[name] = value;
                arr[index].isOk = "error";
            }
        }else {
            if(value === ""||!value){
                arr[index].isOk = "error";
                form[name] = value;
            }else {
                form[name] = value;
                arr[index].isOk = "success";
            }
        }
        if(item.key === "newPassword"&&this.state.login.rePassword ===""&&!this.state.login.rePassword){

        }else if(item.key === "newPassword"&&this.state.login.rePassword){
            if(value === this.state.login.newPassword&&value === this.state.login.rePassword){
                arr[2].isOk = "success";
                arr[3].isOk = "success";
            }else {
                arr[2].isOk = "error";
                arr[3].isOk = "error";
            }
        }else if(item.key === "rePassword"){
            console.log(item.key,value,this.state.login.newPassword)
            if(value !== this.state.login.newPassword){
                arr[index].isOk = "error"
            }else {
                arr[index].isOk = "success";
            }
        }
        this.setState({
            [name2]:arr,
            [name1]:form
        })
    };

    render(){
        return(
            <div className="register-wrap">
                <div>
                    <Form>
                        {
                            this.state.Register.map((item, index)=>{
                                return <FormItem
                                    required
                                    hasFeedback
                                    validateStatus={item.key !== "code"?item.isOk:""}
                                    help={item.isOk === "error"?item.message:null}
                                    key={index}
                                >
                                    {item.before}<Input type={(item.key.indexOf("Pwd") >= 0||
                                    item.key.indexOf("password") >= 0||item.key.indexOf("Password") >= 0||
                                    item.key.indexOf("pwd") >= 0)&&this.state.login[item.key]?"password":"text"}
                                                        className={item.key === "code"?"kaptchald":null}
                                                        onChange={(e)=>this.changeInput(e,item,index,"register")}
                                                        placeholder={item.placeholder}
                                                        id={item.isOk}/>
                                    {
                                        item.key === "code"? <Button onClick={()=>this.getKaptchald()} className="get-kaptchald" type="primary">获取</Button>
                                            :null
                                    }
                                </FormItem>
                            })
                        }
                        <FormItem>
                            <Button onClick={()=>this.handleSubmit("Register")} className="check-button" type="primary">注册</Button>
                        </FormItem>
                        <p className="user-read">
                            <span onClick={()=>{this.setState({isCheck:!this.state.isCheck})}}>{this.state.isCheck?
                                <img src={require("../../../layouts/image/check.png")} alt=""/>:null}
                                </span>
                            <span>已阅读并同意<i href="">用户协议</i></span></p>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {  } = state;
    return {  };
};
export default connect(mapStateToProps)(Register);
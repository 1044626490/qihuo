import React from "react"
import "./rePassword.less"
import { message, Icon, Form, Button, Input } from "antd";
import connect from "react-redux/es/connect/connect";

const FormItem = Form.Item;

class RePassword extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login:{
                tel:localStorage.getItem("phoneNum")||null,
                oldPassword:localStorage.getItem("pwd")||null,
                newPassword:null,
                rePassword:null,
            },
            loginForm:[
                {
                    key:"tel",
                    name:"tel",
                    required:true,
                    message:"请输入电话号码",
                    placeholder:"电话号码",
                    before:<Icon className="before-icon" type="user" theme="outlined" />,
                    re:/^1[3456789]\d{9}$/,
                    isOk:"",
                },
                {
                    key:"oldPassword",
                    name:"oldPassword",
                    required:true,
                    message:"请输入旧密码",
                    placeholder:"请输入旧密码(长度不能低于6位)",
                    isOk:"",
                    re:/^.{6,}$/,
                    before:<Icon className="before-icon" type="lock" theme="outlined" />
                },
                {
                    key:"newPassword",
                    name:"newPassword",
                    required:true,
                    message:"请输入新密码",
                    placeholder:"请输入新密码(长度不能低于6位)",
                    isOk:"",
                    re:/^.{6,}$/,
                    before:<Icon className="before-icon" type="lock" theme="outlined" />
                },
                {
                    key:"rePassword",
                    name:"rePassword",
                    required:true,
                    message:"请确认新密码",
                    placeholder:"请确认新密码(长度不能低于6位)",
                    isOk:"",
                    before:<Icon className="before-icon" type="lock" theme="outlined" />
                }
            ],
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
    };

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
            <div className="login-container">
                <div>
                    <Form>
                        {
                            this.state.loginForm.map((item, index)=>{
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
                                                        onChange={(e)=>this.changeInput(e,item,index,"login")}
                                                        defaultValue={this.state.login[item.key]}
                                                        placeholder={item.placeholder}
                                                        id={item.isOk}/>
                                </FormItem>
                            })
                        }
                        <FormItem>
                            <Button onClick={()=>this.handleSubmit("loginForm")} onClick={()=>this.handleSubmit("loginForm")} className="check-button login-botton" type="primary">确认修改</Button>
                        </FormItem>
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
export default connect(mapStateToProps)(RePassword);
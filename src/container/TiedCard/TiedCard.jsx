import React from "react"
import "./TiedCard.less"
// import FormTable from "../../components/FormTable/FormTable"
import {Button, Form, Icon, Input, Select} from "antd";
import bankcardList from "./bankCard"

const FormItem = Form.Item;
const { Option } = Select;

class TiedCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login:{
                bank:null,
                city:{
                    province:null,
                    town:null
                },
                subbranchOfABank:null,
                cardNum:null,
                name:null,
                IDcard:null,
                tel:null,
                code:null,
            },
            loginForm:[
                {
                    key:"bank",
                    name:"开户银行",
                    required:true,
                    message:"请选择银行",
                    placeholder:"请选择银行",
                    before:null,
                    isOk:"",
                    type:"select",
                    label:[{key:"ABC",name:"中国农业银行"}]
                },
                {
                    key:"city",
                    name:"开户城市",
                    type:"twoSelect",
                    item:[
                        {
                            key:"province",
                            name:"",
                            required:true,
                            message:"请选择省",
                            placeholder:"请选择省",
                            isOk:"",
                            before:null,
                            type:"select",
                            label:[{key:"ABC",name:"中国农业银行"}],
                            disabled:"bank"
                        },
                        {
                            key:"town",
                            name:"",
                            required:true,
                            message:"请选择市",
                            placeholder:"请选择市",
                            isOk:"",
                            before:null,
                            type:"select",
                            label:[{key:1,name:333333333333333333}],
                            disabled:"province"
                        }
                    ]
                },
                {
                    key:"subbranchOfABank",
                    name:"开户支行",
                    required:true,
                    message:"请输入支行名称",
                    placeholder:"请输入支行名称",
                    before:null,
                    isOk:"",
                    type:"input",
                },
                {
                    key:"cardNum",
                    name:"银行卡号",
                    required:true,
                    message:"请输入银行卡号",
                    placeholder:"请输入银行卡号",
                    before:null,
                    isOk:"",
                    re:/^.$/g,
                    type:"input",
                    defaultValue:""
                },{
                    key:"name",
                    name:"开户人",
                    required:true,
                    message:"请输入开户人姓名",
                    placeholder:"请输入开户人姓名",
                    before:null,
                    isOk:"",
                    type:"input",
                    defaultValue:""
                },{
                    key:"IDcard",
                    name:"身份证号",
                    required:true,
                    message:"请输入身份证号",
                    placeholder:"请输入身份证号",
                    before:null,
                    isOk:"",
                    re:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                    type:"input",
                    defaultValue:""
                },{
                    key:"tel",
                    name:"手机号",
                    required:true,
                    message:"请输入银行预留手机号",
                    placeholder:"请输入银行预留手机号",
                    before:null,
                    isOk:"",
                    re:/^1[3456789]\d{9}$/,
                    type:"input",
                    defaultValue:""
                },{
                    key:"code",
                    name:"验证码",
                    required:true,
                    message:"请输入短信验证码",
                    placeholder:"请输入短信验证码",
                    before:null,
                    isOk:"",
                    type:"input",
                    defaultValue:""
                },
            ],
        }
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
                           id={item.isOk}
                    />
                    {
                        item.key === "code"? <span onClick={()=>this.getKaptchald()} className="get-kaptchald" type="primary">获取验证码</span>
                            :null
                    }
                </div>;
                break;
            case "select":

                return <div>
                    <span>{item.name}</span>
                    <Select
                        loading className="order-select"
                        style={{ minWidth: "20%", maxWidth: "50%"}}
                        dropdownMatchSelectWidth={false}
                        value={this.state.login[item.key]}
                        onChange={(value)=>{
                            let arr = this.state.login;
                            let arr1 = this.state.loginForm;
                            arr[item.key] = value;
                            arr1[index].isOk = true;
                            if(item.key === "bank"){
                                for(let i=0;i<bankcardList.length;i++){
                                    if(value === bankcardList[i].bankCode){
                                        arr1[3].re = bankcardList[i].patterns
                                    }
                                }
                            }
                            this.setState({
                                login:arr,
                                loginForm:arr1
                            })
                        }
                        }
                        disabled={item.disabled?!this.state.login.city[item.disabled]:false}
                    >
                        {
                            item.label.map((item,index) => {
                                return <Option key={index} value={item.key}>{item.name}</Option>
                            })
                        }
                    </Select>
                </div>;
                break;
            case "twoSelect":
                return <div>
                    <span>{item.name}</span>
                    {
                        item.item.map((items,indexs) => {
                            return this.itemCreate(item,items,indexs,index)
                        })
                    }
                </div>;
                break;
            default:
                break;
        }
    }

    itemCreate(item,items,indexs,index){
        switch (items.type) {
            case "input":
                return <Input type={items.key === "password"?"password":"text"}
                              onChange={(e)=>this.changeInput(e,item,index,items)}
                              defaultValue={items.key === "password"?localStorage.getItem("pwd")||"":localStorage.getItem("phoneNum")||""}
                              placeholder={items.placeholder}
                              id={items.isOk}/>;
                break;
            case "select":
                return <Select
                    loading className="order-select"
                    // style={{ minWidth: "20%", maxWidth: "40%"}}
                    dropdownMatchSelectWidth={false}
                    value={this.state.login[item.key][items.key]}
                    onChange={(value)=>{
                            let arr = this.state.login;
                            let arr1 = this.state.loginForm;
                            arr[item.key][items.key] = value;
                            arr1[index].item[indexs].isOk = true;
                            this.setState({
                                login:arr,
                                loginForm:arr1
                            })
                        }
                    }
                    disabled={items.disabled?items.key==="province"?!this.state.login[items.disabled]:!this.state.login[item.key][items.disabled]:false}
                    id={items.isOk}
                >
                    {
                        items.label.map((item,index) => {
                            return <Option key={index} value={item.key}>{item.name}</Option>
                        })
                    }
                </Select>
                break;
            default:
                break;
        }
    }

    handleSubmit(){

    }

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

    changeInput = (e, item, index, name1) => {
        let value =e.target.value;
        let arr = name1 === "login"?this.state.loginForm:this.state.Register;
        let name2 = name1 === "login"?"loginForm":"Register";
        let name = item.key;
        let form = this.state[name1];
        if(item.re){
            if(item.key === "cardNum"){
                let count = 0;
                for(let i=0;i<this.state.loginForm[3].re.length;i++){
                    if(this.state.loginForm[3].re[i].reg.test(value)){
                        count++;
                    }
                }
                if(count > 0){
                    arr[index].isOk = "success";
                    form[name] = value;
                }else {
                    arr[index].isOk = "error"
                }
            }else {
                if(item.re.test(value)){
                    arr[index].isOk = "success";
                    form[name] = value;
                }else {
                    arr[index].isOk = "error";
                }
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
        this.setState({
            [name2]:arr,
            [name1]:form
        })
    };

    render(){
        return(
            <div className="tied-card-wrap">
                <div className="my-info-header">
                    <Icon onClick={()=>{window.history.go(-1)}} type="left" />
                    <p>绑定银行卡</p>
                </div>
                <div className="bank-card-wrap">
                    <p className="title">
                        <span>银行卡信息</span>
                    </p>
                    <Form>
                        {
                            this.state.loginForm.map((item, index)=>{
                                if(index === 5){
                                    return <FormItem
                                        required
                                        hasFeedback
                                        validateStatus={item.key !== "code"?item.isOk:""}
                                        help={item.isOk === "error"?item.message:null}
                                        key={item.key}
                                    >
                                        {item.before}{this.formCreate(item,index)}
                                        <p className="title">
                                            <span>银行卡验证</span>
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
                    <p><span>*</span>注：以上，请务必填写真实信息，否则影响提现！</p>
                </div>
            </div>
        )
    }
}

export default TiedCard
import React from "react"
import {Icon, Upload, Modal, message, Input, Radio ,InputNumber , Button} from "antd";
import "./Feedback.less"
import Api from '~/until/api';

const { TextArea } = Input;

class Feedback extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            text:"",
            tel:"",
            type:"1"
        }
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    };

    handleChange = ({fileList}) => {
        if (fileList.length >= 9){
            this.setState({ fileList:fileList.slice(0,9)})
        } else {
            this.setState({ fileList })
        }
        // Api.uploadMyHead({file:file.file}).then((res) => {
        //     message.success(res.msg);
        //     this.setState({
        //         header:res.src
        //     })
        // }).catch((err) => {
        //     message.error(err.msg)
        // })
    };

    onChangeText(e){
        if(e.target.value.length > 200){
            return false
        }
        this.setState({
            text:e.target.value
        })
    }

    InputNumber(e){
        this.setState({
            tel:e.target.value
        })
    }

    submitFeed(){
        const tel = this.state.tel,
               desc = this.state.text,
               pic = this.state.fileList,
               type = this.state.type;
        if(tel.length&&desc.length&&pic.length&&type){

        }else {
            message.warning("请填写完整信息")
        }
    }

    render(){
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        console.log(this.state.text.length)
        return(
            <div className="feedback-wrap">
                <div className="my-info-header">
                    <Icon onClick={()=>{window.history.go(-1)}} type="left" />
                    <p>问题反馈</p>
                </div>
                <div className="feedback-content">
                    <div className="feedback-type">
                        <p><span>*</span>反馈类型</p>
                        <Radio.Group size="middle" onChange={(value)=>{this.setState({type:value})}} defaultValue="1" buttonStyle="solid">
                            <Radio.Button value="1">系统故障</Radio.Button>
                            <Radio.Button value="2">意见反馈</Radio.Button>
                            <Radio.Button value="3">我要吐槽</Radio.Button>
                        </Radio.Group>
                    </div>
                    <div className="feedback-description">
                        <p><span>*</span>问题描述或建议</p>
                        <TextArea placeholder="请您详细描述问题发生的场景和问题，并添加截图，这将有助于我们快速解决您的问题"
                                  value={this.state.text} rows={6} onChange={e => this.onChangeText(e)}/>
                        <span>{this.state.text.length}/200</span>
                    </div>
                    <div className="feedback-pic">
                        <p>添加截图</p>
                        <div className="clearfix">
                            <Upload
                                accept={"image/*"}
                                onChange={this.handleChange}
                                beforeUpload={()=>{return false}}
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview}
                                multiple={true}
                            >
                                {fileList.length >= 9 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </div>
                    </div>
                    <div className="feedback-tel">
                        <p>联系方式</p>
                        <Input placeholder="电话或邮箱" onChange={e => this.InputNumber(e)} value={this.state.tel}/>
                    </div>
                    <Button className={this.state.type&&this.state.fileList.length&&this.state.text.length&&this.state.tel.length?"":"disabled-button"} onClick={()=>this.submitFeed()}>提交</Button>
                </div>
            </div>
        )
    }
}

export default Feedback
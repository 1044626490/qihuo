import React from "react"
import "./DownloadApp.less"
import {Icon} from "antd";

class DownloadApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="download-app-wrap">
                <span onClick={()=>{window.history.go(-1)}}><Icon type="left" />返回</span>
            </div>
        )
    }
}

export default DownloadApp
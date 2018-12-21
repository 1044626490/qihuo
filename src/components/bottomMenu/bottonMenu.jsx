import React from 'react';
import "./bottonMenu.less"

class BottomMenu extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className="footer">
                <div className="footer-bg">
                    <ul>
                        <li onClick={()=>{window.location.href = "#/Dashboard/index"}}>
                            <p className="home-icon">
                                <span>大厅</span>
                            </p>
                        </li>
                        <li onClick={()=>{window.location.href = "#/Dashboard/Activity"}}>
                            <p className="active-icon">
                                <span>活动</span>
                            </p>
                        </li>
                        <li onClick={()=>{window.location.href = "#/Dashboard/PersonalInformation"}}>
                            <p className="my-icon">
                                <span>我的</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BottomMenu
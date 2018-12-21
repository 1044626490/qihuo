import React from "react";
import { Route } from "react-router-dom";
import MyLoadingComponent from "~/components/common/loadComponents";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import "./Dashboard.less";
import 'moment/locale/zh-cn';
import Api from '~/until/api';
import {message} from "antd";
import {fetchPostsGetUser} from '~/action/getUserInfo';

const routes = [
    {
        path: "Index",
        component: Loadable({
            loader: () => import("~/container/Index/Index"),
            loading: MyLoadingComponent,
        }),
        contextTypes:{
            changeTabs:(value)=>{this.setState({activityKey:value})}
        },
        isExact: true
    }
];

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 90,
            activityKey:"2"
            // isLogin:false,
        };
    }

    render() {
        const { match } = this.props;
        const RouteWithSubRoutes = route => (
            <Route
                exact={route.isExact}
                path={`${match.url}/${route.path}`}
                render={props => <route.component {...props} routes={route.routes}
                                                  onChange={(value)=>{this.setState({activityKey:value})}}
                                                  activeKey={this.state.activityKey} />}
            />
        );
        return (
            <div className="container">
                <div>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes isLogin={123} key={i} {...route} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Dashboard;

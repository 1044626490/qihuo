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
    },{
        path: "StockChart",
        component: Loadable({
            loader: () => import("~/container/StockChart/StockChart"),
            loading: MyLoadingComponent,
        }),
        isExact: false
    },{
        path: "Login",
        component: Loadable({
            loader: () => import("~/container/Login/Login"),
            loading: MyLoadingComponent,
        }),
        isExact: false
    },{
        path: "incomeAndExpenses",
        component: Loadable({
            loader: () => import("~/container/incomeAndExpenses/incomeAndExpenses"),
            loading: MyLoadingComponent,
        }),
        isExact: false
    },{
        path: "Commission",
        component: Loadable({
            loader: () => import("~/container/Commission/Commission"),
            loading: MyLoadingComponent,
        }),
        isExact: false
    },{
        path: "DownloadApp",
        component: Loadable({
            loader: () => import("~/container/DownloadApp/DownloadApp"),
            loading: MyLoadingComponent,
        }),
        isExact: false
    },{
        path: "TiedCard",
        component: Loadable({
            loader: () => import("~/container/TiedCard/TiedCard"),
            loading: MyLoadingComponent,
        }),
        isExact: false
    },{
        path: "chargeAndWithdrawDeposit/:id",
        component: Loadable({
            loader: () => import("~/container/chargeAndWithdrawDeposit/chargeAndWithdrawDeposit"),
            loading: MyLoadingComponent,
        }),
        isExact: false
    },{
        path: "withdrawDeposit/:money",
        component: Loadable({
            loader: () => import("~/container/chargeAndWithdrawDeposit/component/withdrawDeposit"),
            loading: MyLoadingComponent,
        }),
        isExact: false
    },{
        path: "RePasswordIndex",
        component: Loadable({
            loader: () => import("~/container/rePassword/rePassword"),
            loading: MyLoadingComponent,
        }),
        isExact: false
    },{
        path: "ReDealPasswordIndex",
        component: Loadable({
            loader: () => import("~/container/reDealPassword/rePassword"),
            loading: MyLoadingComponent,
        }),
        isExact: false
    },{
        path: "Feedback",
        component: Loadable({
            loader: () => import("~/container/Feedback/Feedback"),
            loading: MyLoadingComponent,
        }),
        isExact: false
    }
];

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 90,
            activityKey:"1"
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

import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import FeatureRoutes from "./features/routes";
import GoogleLogin from "./oauth/googleLogin";
import GatewayService from "./oauth/gateway";

const history = createBrowserHistory();
export default class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route
                        exact
                        path="/features/*"
                        component={FeatureRoutes}
                    />
                    <Route
                        exact
                        path="/public/oauth/gateway"
                        component={GatewayService}
                    />
                    <Route path="/public" component={GoogleLogin} />
                </Switch>
            </Router>
        );
    }
}

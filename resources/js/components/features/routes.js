import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { oauthSelector } from "./../oauth/oauthSlice";

import HNav from "./../elements/navbars/hNav";
import SideNav from "./../elements/navbars/sideNav";
import { AppDashboard, OrgDashboard } from "./dashboard";

const GateWay = props => {
    const oauth = useSelector(oauthSelector);
    const { profile } = oauth;

    console.log("--== profile ", profile);

    return (
        <React.Fragment>
            <HNav displaySidebar={"none"} {...props} />

            <div className="d-flex justify-content-start">
                <SideNav />
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12 mt-1">
                            <div className="d-flex justify-content-start">
                                <Switch>
                                    <Route
                                        exact
                                        path="/features/dashboard/app"
                                        component={AppDashboard}
                                    />
                                    <Route
                                        exact
                                        path="/features/dashboard/org"
                                        component={OrgDashboard}
                                    />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GateWay;

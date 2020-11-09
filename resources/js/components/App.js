import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import PublicRoutes from "./publicRoutes";

if (document.getElementById("app")) {
    ReactDOM.render(
        <React.Fragment>
            <Provider store={store}>
                <PublicRoutes />
            </Provider>
        </React.Fragment>,
        document.getElementById("app")
    );
}

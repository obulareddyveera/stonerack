import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "./store";
import PublicRoutes from "./publicRoutes"

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">App Component</div>

                        <div className="card-body">I'm an App component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<React.Fragment>
        <Provider store={store}>
          <div className="container-fluid m-0 p-0" style={{ height: "100vh" }}>
            <PublicRoutes />
          </div>
        </Provider>
      </React.Fragment>, document.getElementById("app"));
}

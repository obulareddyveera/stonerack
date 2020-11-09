import React from "react";

import GoogleLoginCard from "../elements/cards/googleLogin";

const GoogleLogin = props => {
    return (
        <div
            className="border d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
        >
          <GoogleLoginCard {...props} />
        </div>
    );
};

export default GoogleLogin;

import React from "react";

import GoogleLoginCard from "../elements/cards/googleLogin";

const GoogleLogin = (props) => {

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="offset-3 col-6 h-100">
          <div className="d-flex flex-column justify-content-center h-100">
            <GoogleLoginCard {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleLogin;

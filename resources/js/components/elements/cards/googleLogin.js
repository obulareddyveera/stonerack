import React from "react";
import { GoogleLogin } from "react-google-login";

import LoginDisplay from "./../logo/loginDisplay";
const CLIENT_ID =
  "643540525219-947emudk7cr2svpavlc621epqiie02fs.apps.googleusercontent.com";

const GoogleLoginCard = (props) => {
  React.useEffect(() => {
    let googleAccessToken = sessionStorage.getItem("GoogleAccessToken");
    if (googleAccessToken) {
      googleAccessToken = JSON.parse(googleAccessToken);
      if (googleAccessToken && googleAccessToken.accessToken) {
        props.history.push("/oauth/gateway");
      }
    }
  });

  const login = (response) => {
    console.log("--== response.accessToken", response);
    if (response.accessToken) {
      sessionStorage.setItem("GoogleAccessToken", JSON.stringify(response));
      props.history.push("/oauth/gateway");
    }
  };

  const handleLoginFailure = (response) => {
    console.log("--== handleLoginFailure ", response);
  };

  return (
    <div className="card">
      <div className="card-header bg-primary">
        <LoginDisplay />
      </div>
      <div className="card-body">
        <div className="d-flex flex-column justify-content-around">
          <div className="d-flex justify-content-around">
            <div>
              <p>
                Stone-Shelf is a flexible system built exclusively for marble,
                tiles and granite sales showroom. The application is designed
                for Indian industry. This software helps with services like
                inventory management, billing and helps sales team with 3D
                display tools to improve small and growing businesses
                effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center">
          <GoogleLogin
            className="bg-primary text-white"
            clientId={CLIENT_ID}
            onSuccess={login}
            onFailure={handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleLoginCard;

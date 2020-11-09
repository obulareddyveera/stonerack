import React, { useEffect } from "react";
import styled from "styled-components";
import { GoogleLogout } from "react-google-login";
import { MenuOpen } from "@styled-icons/material";

import InlineLogo from "./../logo/inlineLogo";

const ProfilePic = styled.img`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
`;

const CLIENT_ID =
    "643540525219-947emudk7cr2svpavlc621epqiie02fs.apps.googleusercontent.com";
export default function HNav({ displaySidebar, history }) {
    const [profile, setProfile] = React.useState({});
    const picture = profile.imageUrl || "/empty_profile.jpeg";

    useEffect(() => {
        let googleAccessToken = sessionStorage.getItem("GoogleAccessToken");
        if (googleAccessToken) {
            googleAccessToken = JSON.parse(googleAccessToken);
            const { profileObj } = googleAccessToken;
            setProfile(profileObj);
        }
    }, []);

    return (
        <header>
            <nav className="navbar navbar-light bg-light fixed-top scrolling-navbar">
                <div className="container-fluid">
                    <div className="d-flex">
                        <InlineLogo />
                        {displaySidebar !== "block" && (
                            <button
                                className="navbar-toggler"
                                type="button"
                                className="btn btn-link"
                                data-toggle="collapse"
                                data-target="#sideMenuContent"
                                aria-controls="sideMenuContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <MenuOpen size="24" />
                            </button>
                        )}
                    </div>
                    <div className="btn-group">
                        <ProfilePic
                            src={picture}
                            className="rounded-circle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        />
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="#/auth/profile" className="dropdown-item">
                                Profile
                            </a>
                            <div className="dropdown-divider"></div>
                            <GoogleLogout
                                className="dropdown-item"
                                clientId={CLIENT_ID}
                                buttonText="Logout"
                                onLogoutSuccess={() => {
                                    sessionStorage.removeItem(
                                        "GoogleAccessToken"
                                    );
                                    history.push("/");
                                }}
                                onFailure={() => {
                                    console.log("Failed to log out");
                                }}
                            ></GoogleLogout>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

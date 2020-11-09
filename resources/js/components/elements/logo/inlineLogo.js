import React from "react";
import { Brackets } from "@styled-icons/remix-fill";
import styled from "styled-components";

const LogoHeader = styled.h6`
    font-family: "Titillium Web", sans-serif;
    margin-top: 0.3rem;
    margin-bottom: 0;
    font-weight: 600;
`;
const InlineLogo = () => {
    return (
        <React.Fragment>
            <a
                className="navbar-brand waves-effect"
                href="/public"
                target="_blank"
            >
                <Brackets size={24} />
                <LogoHeader>Stone Rack</LogoHeader>
            </a>
        </React.Fragment>
    );
};

export default InlineLogo;

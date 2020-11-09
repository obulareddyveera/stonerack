import React from "react";
import styled from "styled-components";
import { Brackets } from "@styled-icons/remix-fill";

const LogoHeader = styled.h6`
    font-family: "Titillium Web", sans-serif;
    margin-top: 0.3rem;
    margin-bottom: 0;
    font-weight: 600;
`;

const LoginDisplay = () => {

  return (
    <div className="d-flex text-white">
      <span className="mr-2">
        <Brackets size="24" />
      </span>
      <LogoHeader>Stone Rack</LogoHeader>
    </div>
  );
};

export default LoginDisplay;

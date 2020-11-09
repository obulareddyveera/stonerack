import React from "react";
import styled from "styled-components";

import "./sideNav.css";
import AppNavigationMenu from "./menu";

const SideMenu = styled.div`
  height: 100vh;
  width: 30%;
  background: #414956;
  position: relative !important;
  @media (max-width: 720px) {
    position: absolute !important;
    z-index: 1;
    width: 100%;
  }
`;
export default function SideNav() {
  return (
    <SideMenu className="expand" id="sideMenuContent">
      <div className="bg-dark pt-4">
        <div className="mt-5">
          <AppNavigationMenu />
        </div>
      </div>
    </SideMenu>
  );
}

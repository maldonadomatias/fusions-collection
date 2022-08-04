import React, { useEffect, useState } from "react";

import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { SideNavBarStatus } from "./SideNavbar";

const MAIN_COLOR = "var(--jet)";
const SECONDARY_COLOR = "var(--platinum)";

export const NAV_BAR_HEIGHT = "64px";

const IconAndTTMLogoFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

interface Props {
  sideNavBarStatus: SideNavBarStatus;
  onClickMenuButton: () => void;
}

const NavBar = ({ sideNavBarStatus, onClickMenuButton }: Props) => {
  return (
    <AppBar
      style={{
        boxShadow: "none",
        backgroundColor: MAIN_COLOR,
        color: SECONDARY_COLOR,
      }}
    >
      <Toolbar style={{ padding: "0px 18px", minHeight: NAV_BAR_HEIGHT }}>
        <IconAndTTMLogoFrame>
          <IconButton
            style={{ padding: "0px" }}
            disableRipple
            onClick={() => onClickMenuButton()}
          >
            {sideNavBarStatus == SideNavBarStatus.OPENED && (
              <MenuOpenIcon style={{ color: SECONDARY_COLOR }} />
            )}
            {(sideNavBarStatus == SideNavBarStatus.CLOSED ||
              sideNavBarStatus == SideNavBarStatus.HIDDEN) && (
              <MenuIcon style={{ color: SECONDARY_COLOR }} />
            )}
          </IconButton>
          <Typography style={{ paddingLeft: "15px" }} variant="h6">
            TOTHEMOON UNIVERSE
          </Typography>
        </IconAndTTMLogoFrame>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

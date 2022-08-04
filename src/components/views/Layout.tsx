import React, { useState } from "react";

import clsx from "clsx";

import { FUSIONS_COLLECTION_PATH } from "../../constants/pagePaths";

import { makeStyles } from "@material-ui/core/styles";
import { GiPotionBall } from "react-icons/gi";
import NavBar, { NAV_BAR_HEIGHT } from "./NavBar";
import SideNavBar, { DRAWER_WIDTH, SideNavBarStatus } from "./SideNavbar";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    marginTop: NAV_BAR_HEIGHT,
    transition: "max-width 0.2s ease 0s, margin-left 0.2s ease 0s",
    color: "var(--platinum)",
  },
  contentWithSideNavBarOpen: {
    marginLeft: DRAWER_WIDTH,
    maxWidth: `calc(100% - ${DRAWER_WIDTH})`,
    [theme.breakpoints.down("sm")]: {
      marginLeft: "unset",
      maxWidth: "unset",
    },
  },
  contentWithSideNavBarClosed: {
    marginLeft: "60px",
    maxWidth: "calc(100% - 60px)",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "unset",
      maxWidth: "unset",
    },
  },
}));

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const classes = useStyles();
  const [sideNavBarStatus, setSideNavBarStatus] = useState<SideNavBarStatus>(
    SideNavBarStatus.CLOSED
  );

  const sideNavBarItems = [
    {
      type: "Button",
      icon: <GiPotionBall size={20} />,
      text: "Fusions Collection",
      pagePath: FUSIONS_COLLECTION_PATH,
      displayOnlyIfWalletIsConnected: false,
    },
  ];

  const onClickMenuButton = () => {
    if (sideNavBarStatus == SideNavBarStatus.OPENED) {
      setSideNavBarStatus(SideNavBarStatus.CLOSED);
    } else if (sideNavBarStatus == SideNavBarStatus.CLOSED) {
      setSideNavBarStatus(SideNavBarStatus.OPENED);
    } else if (sideNavBarStatus == SideNavBarStatus.HIDDEN) {
      setSideNavBarStatus(SideNavBarStatus.CLOSED);
    }
  };

  return (
    <>
      <NavBar
        sideNavBarStatus={sideNavBarStatus}
        onClickMenuButton={onClickMenuButton}
      />
      <SideNavBar
        sideNavBarStatus={sideNavBarStatus}
        sideNavBarItems={sideNavBarItems}
        setSideNavBarStatus={setSideNavBarStatus}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentWithSideNavBarOpen]:
            sideNavBarStatus == SideNavBarStatus.OPENED,
          [classes.contentWithSideNavBarClosed]:
            sideNavBarStatus == SideNavBarStatus.CLOSED,
        })}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;

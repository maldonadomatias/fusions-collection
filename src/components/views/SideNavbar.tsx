import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { FaMedium } from "react-icons/fa";
import { BsDiscord, BsTelegram, BsTwitter } from "react-icons/bs";

import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Drawer from "@material-ui/core/Drawer";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NAV_BAR_HEIGHT } from "./NavBar";

export const DRAWER_WIDTH = "240px";
export enum SideNavBarStatus {
  OPENED = "WALLET_PROVIDERS",
  CLOSED = "CONNECTED_WALLET",
  HIDDEN = "HIDDEN",
}
const MAIN_COLOR = "var(--seaGreenCrayola)";

const useStyles = makeStyles((theme) => ({
  drawer: {
    color: "var(--platinum)",
    backgroundColor: "var(--jet)",
    overflowX: "hidden",
    transition: "width 0.25s ease",
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
  },
  drawerClose: {
    width: "60px",
    [theme.breakpoints.down("sm")]: {
      width: "0px",
    },
  },
  drawerHidden: {
    width: "0px",
  },
  socialNetworks: {
    padding: "16px 0px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  socialNetworkIcon: {
    color: "var(--platinum)",
    transition: "color 0.3s ease",
    fontSize: "32px",
    "&:hover": {
      color: MAIN_COLOR,
    },
  },
  subOption: {
    padding: "8px 0px 8px 50px",
    cursor: "pointer",
    "&:hover": {
      color: MAIN_COLOR,
    },
  },
  disabledSubOption: {
    padding: "8px 0px 8px 50px",
    cursor: "default",
    color: "var(--battleshipGrey)",
  },
  sideNavBarOption: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "8px 0px 8px 20px",
    height: "48px",
    "&:hover": {
      color: MAIN_COLOR,
    },
  },
  sideNavBarOptionDisabled: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "8px 0px 8px 20px",
    height: "48px",
    color: "var(--battleshipGrey)",
  },
  accordion: {
    borderRadius: "0px",
    boxShadow: "unset",
    backgroundColor: "inherit",
    color: "inherit",
    margin: "0px !important",
    position: "unset",
  },
}));

interface Props {
  sideNavBarStatus: SideNavBarStatus;
  sideNavBarItems: Array<any>;
  setSideNavBarStatus: (status: SideNavBarStatus) => void;
}

const SideNavBar = ({
  sideNavBarStatus,
  sideNavBarItems,
  setSideNavBarStatus,
}: Props) => {
  const classes = useStyles();
  const [currentPagePath, setCurrentPagePath] = useState("");
  const [expanded, setExpanded] = useState<string>("");

  let history = useHistory();

  useEffect(() => {
    setCurrentPagePath(history.location.pathname);
    let unlisten = history.listen((location) => {
      setCurrentPagePath(location.pathname);
    });
    return () => {
      unlisten();
    };
  }, []);

  useEffect(() => {
    if (sideNavBarStatus == SideNavBarStatus.CLOSED) {
      setExpanded("");
    }
  }, [sideNavBarStatus]);

  const handleChange = (panel: any) => (event: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const oneTheSubOptionsPagePathsIsEqualToTheCurrentPagePath = (
    suboptions: any[]
  ) => {
    return suboptions.some((subOption) => {
      if (subOption.pagePath === currentPagePath) {
        return true;
      }
    });
  };

  const scrollToTheTop = () => {
    window.scrollTo(0, 0);
  };

  const goTo = (pagePath: string) => {
    scrollToTheTop();
    history.push(pagePath);
  };

  return (
    <Drawer
      variant="permanent"
      style={{ zIndex: 11, position: "fixed" }}
      classes={{
        paperAnchorLeft: classes.drawer,
        paper: clsx({
          [classes.drawerOpen]: sideNavBarStatus == SideNavBarStatus.OPENED,
          [classes.drawerClose]: sideNavBarStatus == SideNavBarStatus.CLOSED,
          [classes.drawerHidden]: sideNavBarStatus == SideNavBarStatus.HIDDEN,
        }),
      }}
    >
      <div
        style={{
          height: "80%",
          marginTop: NAV_BAR_HEIGHT,
          fontSize: "0.9375rem",
        }}
      >
        {sideNavBarItems.map((item) => {
          if (item.disabled) {
            return (
              <div key={item.text} className={classes.sideNavBarOptionDisabled}>
                <div
                  style={{
                    marginRight: "20px",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>{item.text}</div>
              </div>
            );
          }
          if (item.type === "Button") {
            return (
              <div
                key={item.text}
                className={classes.sideNavBarOption}
                onClick={() => {
                  goTo(item.pagePath);
                }}
                style={{
                  color:
                    currentPagePath === item.pagePath
                      ? "var(--seaGreenCrayola)"
                      : "",
                  minWidth: "239px",
                }}
              >
                <div
                  style={{
                    marginRight: "20px",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>{item.text}</div>
              </div>
            );
          }

          if (item.type === "Menu") {
            return (
              <Accordion
                style={{
                  minWidth: "239px",
                }}
                key={item.id}
                className={classes.accordion}
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
                onClick={() => {
                  if (sideNavBarStatus == SideNavBarStatus.CLOSED) {
                    setSideNavBarStatus(SideNavBarStatus.OPENED);
                  }
                }}
              >
                <AccordionSummary
                  style={{
                    minHeight: "48px",
                    maxHeight: "48px",
                    justifyContent: "space-between",
                    padding: "0px 20px",
                    color: oneTheSubOptionsPagePathsIsEqualToTheCurrentPagePath(
                      item.subOptions
                    )
                      ? "var(--seaGreenCrayola)"
                      : "",
                  }}
                  expandIcon={<ExpandMoreIcon style={{ color: "inherit" }} />}
                  IconButtonProps={{
                    style: {
                      margin: "0px",
                      padding: "0px",
                      color: "inherit",
                    },
                  }}
                >
                  <div style={{ display: "inline-flex", alignItems: "center" }}>
                    <div
                      style={{
                        marginRight: "20px",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>{item.name}</div>
                  </div>
                </AccordionSummary>
                <AccordionDetails style={{ padding: "0px", width: "100%" }}>
                  <div
                    style={{
                      marginLeft: "20px",
                      fontSize: "0.875rem",
                      width: "100%",
                    }}
                  >
                    {item.subOptions.map((subOption: any, index: any) => {
                      return (
                        <div
                          key={index}
                          style={{
                            color:
                              currentPagePath == subOption.pagePath
                                ? "var(--seaGreenCrayola)"
                                : "",
                          }}
                          className={classes.subOption}
                          onClick={() => {
                            if (subOption.pagePath) {
                              goTo(subOption.pagePath);
                            }
                          }}
                        >
                          {subOption.text}
                        </div>
                      );
                    })}
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          }
        })}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "12px 0px",
            cursor: "pointer",
            visibility:
              sideNavBarStatus != SideNavBarStatus.OPENED
                ? "visible"
                : "hidden",
          }}
          onClick={() => setSideNavBarStatus(SideNavBarStatus.HIDDEN)}
        >
          <HiArrowNarrowLeft
            style={{ color: "color: rgb(255 255 255 / 30%)" }}
            size={25}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "2%",
            width: "calc(100% - 0px)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              cursor: "pointer",
              visibility:
                sideNavBarStatus != SideNavBarStatus.OPENED
                  ? "hidden"
                  : "visible",
            }}
          >
            <Link color="inherit" href="https://discord.com/" target="_blank">
              <BsDiscord
                style={{ color: "color: rgb(255 255 255 / 30%)" }}
                size={25}
              />
            </Link>
            <Link
              color="inherit"
              href="https://desktop.telegram.org/"
              target="_blank"
            >
              <BsTelegram
                style={{ color: "color: rgb(255 255 255 / 30%)" }}
                size={25}
              />
            </Link>
            <Link color="inherit" href="https://twitter.com/" target="_blank">
              <BsTwitter
                style={{ color: "color: rgb(255 255 255 / 30%)" }}
                size={25}
              />
            </Link>
            <Link color="inherit" href="https://medium.com/" target="_blank">
              <FaMedium
                style={{ color: "color: rgb(255 255 255 / 30%)" }}
                size={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default SideNavBar;

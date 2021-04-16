import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import LinkMui from "@material-ui/core/Link";

import L_LOGO from "../../assets/img/logo/logo.png";
import LocationData from "./LocationData.json";

import UserInfor from "./UserInfor";
import LocationList from "./LocationList";
import MobileMenu from "./MobileMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  mainMenuList: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
    },
  },
  mainMenuItemLink: {
    textDecoration: "none !important",
    color: "black",
    fontSize: "14px",
    fontWeight: "500",
    "&:hover": {
      color: "var(--primary-color)",
    },
  },
  subMenuList: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  mobileMenu: {
    display: "block",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function NavHeader(props) {
  const classes = useStyles();
  const { isLogin, currentLocation, setCurrentLocation } = props;
  const [isShowLocationList, setIsShowLocationList] = React.useState(false);
  const [
    isShowLocationListMobile,
    setIsShowLocationListMobile,
  ] = React.useState(false);
  const [isShowMobileMenu, setIsShowMobileMenu] = React.useState(false);

  const toggleIsShowLocationList = () => {
    setIsShowLocationList(!isShowLocationList);
  };

  const toggleIsShowLocationListMobile = () => {
    setIsShowLocationListMobile(!isShowLocationListMobile);
  };

  const handleSelectLocation = (event) => {
    let locationIndex = LocationData.findIndex((location) => {
      return location.code === event.currentTarget.id;
    });

    if (locationIndex >= 0) {
      setCurrentLocation(LocationData[locationIndex].name);
    }
    setIsShowLocationList(false);
    setIsShowLocationListMobile(false);
  };

  const toggleIsShowMobileMenu = () => {
    setIsShowMobileMenu(!isShowMobileMenu);
  };

  return (
    <AppBar
      style={{
        display: "block",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <Toolbar
        style={{
          minHeight: "60px",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box component="a" href="/" display="flex" alignItems="center">
          <Box
            component="img"
            src={L_LOGO}
            alt="Logo"
            width="50px"
            height="50px"
          ></Box>
        </Box>
        <List className={classes.mainMenuList}>
          <ListItem style={{ width: "unset" }} alignItems="center">
            <LinkMui className={classes.mainMenuItemLink} href="#lich-chieu">
              Lịch Chiếu
            </LinkMui>
          </ListItem>
          <ListItem style={{ width: "unset" }} alignItems="center">
            <LinkMui className={classes.mainMenuItemLink} href="#cum-rap">
              Cụm Rạp
            </LinkMui>
          </ListItem>
          <ListItem style={{ width: "unset" }} alignItems="center">
            <LinkMui className={classes.mainMenuItemLink} href="#tin-tuc">
              Tin Tức
            </LinkMui>
          </ListItem>
          <ListItem style={{ width: "unset" }} alignItems="center">
            <LinkMui className={classes.mainMenuItemLink} href="#ung-dung">
              Ứng Dụng
            </LinkMui>
          </ListItem>
        </List>
        <Box className={classes.subMenuList}>
          <UserInfor isLogin={isLogin} />
          <Box height="28px" borderRight="1px solid rgb(190, 190, 190)"></Box>
          <Box
            display="flex"
            minWidth="160px"
            alignItems="center"
            paddingLeft="10px"
            style={{ cursor: "pointer" }}
            position="relative"
            onClick={toggleIsShowLocationList}
          >
            <LocationOnOutlinedIcon style={{ color: "#888" }} />
            <Box component="span" color="#888" fontSize="14px">
              {currentLocation}
            </Box>
            <KeyboardArrowDownOutlinedIcon
              style={{
                color: "#888",
                marginRight: 0,
                marginLeft: "auto",
              }}
            />
            {isShowLocationList && (
              <ClickAwayListener onClickAway={toggleIsShowLocationList}>
                <Box
                  position="absolute"
                  top="44px"
                  left="0"
                  // width="100%"
                  borderRadius="4px"
                  overflow="hidden"
                  boxShadow="2px 2px 6px 2px rgba(0,0,0, 0.2)"
                >
                  <LocationList
                    LocationData={LocationData}
                    handleSelectLocation={handleSelectLocation}
                  />
                </Box>
              </ClickAwayListener>
            )}
          </Box>
        </Box>
        <Box className={classes.mobileMenu}>
          <MenuIcon
            onClick={toggleIsShowMobileMenu}
            style={{ color: "#888", cursor: "pointer" }}
          />
          <MobileMenu
            isLogin={isLogin}
            currentLocation={currentLocation}
            LocationData={LocationData}
            isShowMobileMenu={isShowMobileMenu}
            toggleIsShowMobileMenu={toggleIsShowMobileMenu}
            isShowLocationListMobile={isShowLocationListMobile}
            toggleIsShowLocationListMobile={toggleIsShowLocationListMobile}
            handleSelectLocation={handleSelectLocation}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

NavHeader.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  currentLocation: PropTypes.string.isRequired,
  setCurrentLocation: PropTypes.func.isRequired,
};

NavHeader.defaultProps = {
  isLogin: false,
  currentLocation: "Hồ Chí Minh",
  handleSelectLocation: undefined,
};

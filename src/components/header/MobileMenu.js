import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Slide from "@material-ui/core/Slide";
import LinkMui from "@material-ui/core/Link";

import UserInforMobile from "./UserInforMobile";
import LocationListMobile from "./LocationListMobile";

const useStyles = makeStyles((theme) => ({
  mobileMenuList: {
    display: "flex",
    flexDirection: "column",
  },
  mobileMenuItemLink: {
    textDecoration: "none !important",
    color: "black",
    fontSize: "20px",
    padding: "12px 0",
    fontWeight: "500",
    "&:hover": {
      color: "var(--primary-color)",
    },
  },
}));

export default function MobileMenu(props) {
  const classes = useStyles();
  const {
    isLogin,
    currentLocation,
    LocationData,
    isShowMobileMenu,
    toggleIsShowMobileMenu,
    isShowLocationListMobile,
    toggleIsShowLocationListMobile,
    handleSelectLocation,
  } = props;

  return (
    <Fragment>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modalTopRight}
        open={isShowMobileMenu}
        onClose={toggleIsShowMobileMenu}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Slide
          direction="left"
          in={isShowMobileMenu}
          mountOnEnter
          unmountOnExit
          timeout={300}
        >
          <Box
            position="absolute"
            top="0"
            right="0"
            width="70vw"
            height="100vh"
            bgcolor="white"
            style={{ outline: "none" }}
          >
            <Box
              display="flex"
              height="60px"
              alignItems="center"
              justifyContent="space-between"
              margin="0 14px"
            >
              <UserInforMobile isLogin={isLogin} />
              <ArrowForwardIosIcon
                onClick={toggleIsShowMobileMenu}
                style={{
                  color: "#888",
                  cursor: "pointer",
                }}
              />
            </Box>
            <List className={classes.mobileMenuList}>
              <ListItem style={{ width: "unset" }} alignItems="center">
                <LinkMui
                  onClick={toggleIsShowMobileMenu}
                  className={classes.mobileMenuItemLink}
                  href="#lich-chieu"
                >
                  Lịch Chiếu
                </LinkMui>
              </ListItem>
              <ListItem style={{ width: "unset" }} alignItems="center">
                <LinkMui
                  onClick={toggleIsShowMobileMenu}
                  className={classes.mobileMenuItemLink}
                  href="#cum-rap"
                >
                  Cụm Rạp
                </LinkMui>
              </ListItem>
              <ListItem style={{ width: "unset" }} alignItems="center">
                <LinkMui
                  onClick={toggleIsShowMobileMenu}
                  className={classes.mobileMenuItemLink}
                  href="#tin-tuc"
                >
                  Tin Tức
                </LinkMui>
              </ListItem>
              <ListItem style={{ width: "unset" }} alignItems="center">
                <LinkMui
                  onClick={toggleIsShowMobileMenu}
                  className={classes.mobileMenuItemLink}
                  href="#ung-dung"
                >
                  Ứng Dụng
                </LinkMui>
              </ListItem>
              <ListItem style={{ width: "unset" }} alignItems="center">
                <Box
                  onClick={toggleIsShowLocationListMobile}
                  className={classes.mobileMenuItemLink}
                  style={{ cursor: "pointer" }}
                >
                  {currentLocation}
                </Box>
              </ListItem>
            </List>
          </Box>
        </Slide>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modalCenter}
        open={isShowLocationListMobile}
        onClose={toggleIsShowLocationListMobile}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 0,
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
          }}
        >
          <LocationListMobile
            LocationData={LocationData}
            handleSelectLocation={handleSelectLocation}
          />
        </Box>
      </Modal>
    </Fragment>
  );
}

MobileMenu.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  currentLocation: PropTypes.string.isRequired,
  LocationData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      code: PropTypes.string,
    })
  ).isRequired,
  isShowMobileMenu: PropTypes.bool.isRequired,
  toggleIsShowMobileMenu: PropTypes.func.isRequired,
  isShowLocationListMobile: PropTypes.bool.isRequired,
  toggleIsShowLocationListMobile: PropTypes.func.isRequired,
  handleSelectLocation: PropTypes.func.isRequired,
};

MobileMenu.defaultProps = {
  isLogin: false,
  currentLocation: "Hồ Chí Minh",
  LocationData: [
    {
      id: 1,
      name: "Hồ Chí Minh",
      code: "HoChiMinh",
    },
  ],
  isShowMobileMenu: false,
  toggleIsShowMobileMenu: undefined,
  isShowLocationListMobile: false,
  toggleIsShowLocationListMobile: undefined,
  handleSelectLocation: undefined,
};

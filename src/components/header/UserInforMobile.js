import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import L_AVATAR from "../../assets/img/user/default_avatar.png";

const useStyles = makeStyles((theme) => ({
  userLoginLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none !important",
    cursor: "pointer",
  },
  userLoginName: {
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "black",
    fontSize: "18px",
    fontWeight: "500",
    "&:hover": {
      color: "var(--primary-color)",
    },
  },
  userLoginAvatar: {
    width: "40px",
    height: "40px",
  },
  userLoginMenuList: {
    position: "absolute",
    top: "48px",
    left: "0",
    width: "100%",
    borderRadius: "4px",
    backgroundColor: "rgb(236 236 236) !important",
    padding: "10px 0",
    zIndex: "1",
  },
  userLoginMenuItem: {
    height: "38px",
    lineHeight: "38px",
    textAlign: "center",
    borderRadius: "4px",
    fontSize: "18px",
    color: "black",
    "&:hover": {
      backgroundColor: "var(--primary-color)",
      color: "white",
    },
    cursor: "pointer",
    textDecoration: "none !important",
    display: "block",
  },
}));

export default function UserInforMobile(props) {
  const classes = useStyles();
  const { isLogin, onLogout, userInfor } = props;
  const [isLoginMenu, setIsShowLoginMenu] = React.useState(false);

  const toggleIsShowLoginMenu = () => {
    setIsShowLoginMenu(!isLoginMenu);
  };

  const handleOnClickLogout = () => {
    setIsShowLoginMenu(false);

    if (typeof onLogout === "function") {
      console.log(onLogout);
      onLogout();
    }
  };

  return (
    <Box>
      {isLogin && (
        <Box position="relative">
          <Box
            onClick={toggleIsShowLoginMenu}
            className={classes.userLoginLink}
            to="/ca-nhan/"
          >
            <Avatar
              className={classes.userLoginAvatar}
              alt="User avatar"
              src={userInfor.avatar}
            />
            <span className={classes.userLoginName}>{userInfor.name}</span>
          </Box>
          {isLoginMenu && (
            <ClickAwayListener onClickAway={toggleIsShowLoginMenu}>
              <Box className={classes.userLoginMenuList}>
                <Link to="/ca-nhan/" className={classes.userLoginMenuItem}>
                  Thông tin cá nhân
                </Link>
                <Box
                  onClick={handleOnClickLogout}
                  className={classes.userLoginMenuItem}
                >
                  Đăng xuất
                </Box>
              </Box>
            </ClickAwayListener>
          )}
        </Box>
      )}
      {!isLogin && (
        <Link className={classes.userLoginLink} to="/dang-nhap/">
          <Avatar
            className={classes.userLoginAvatar}
            alt="User avatar"
            src={L_AVATAR}
          />
          <span className={classes.userLoginName}>Đăng Nhập</span>
        </Link>
      )}
    </Box>
  );
}

UserInforMobile.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  onLogout: PropTypes.func,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
};

UserInforMobile.defaultProps = {
  isLogin: false,
  onLogout: undefined,
  userInfor: {
    avatar: undefined,
    name: "Nguyễn Văn A",
  },
};

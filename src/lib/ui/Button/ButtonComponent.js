import React from "react";
import { Button, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/';
import PropTypes from "prop-types";


function ButtonComponent(props) {
  const { disabled, loading, padding = "10px 0", margin, textTransform = "none", boxShadow, borderRadius = "6px", background, backgroundHover, backgroundColor = '#D62828', backgroundColorHover = "#DF5353", color = 'white', colorHover, children, ...other } = props;
  const useStyles = makeStyles(() => ({
    root: {
      "&.MuiButton-root": {
        transition:
          "background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        background,
        textTransform,
        backgroundColor,
        color,
        borderRadius,
        boxShadow,
        margin,
        padding,
        "&:hover": {
          background: backgroundHover,
          backgroundColor: backgroundColorHover,
          color: colorHover,
        },
      },
    },
  }));
  const classes = useStyles();
  return (
    <Button
      disabled={disabled || loading}
      classes={{
        root: classes.root
      }}
      {...other}
    >
      { loading && <CircularProgress className="loading" />}
      {children}
    </Button>
  );
};

export default ButtonComponent;
ButtonComponent.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  backgroundColorHover: PropTypes.string,
  backgroundHover: PropTypes.string,
  colorHover: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  boxShadow: PropTypes.string,
  textTransform: PropTypes.string,
}
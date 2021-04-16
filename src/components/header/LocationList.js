import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  locationList: {
    width: "160px",
    maxHeight: "300px",
    overflowY: "scroll",
    backgroundColor: "white",
    color: "black",
    "&::-webkit-scrollbar": {
      width: "4px",
      backgroundColor: "#e8e3e3",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      boxShadow: "inset 0 0 6px rgb(0 0 0 / 30%)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      maxWidth: "560px",
      maxHeight: "90vh",
    },
  },
  locationListItem: {
    padding: "4px 18px",
    fontSize: "16px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "var(--primary-color)",
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px 18px",
      fontSize: "20px",
      justifyContent: "center",
    },
  },
}));

export default function LocationList(props) {
  const classes = useStyles();
  const { LocationData, handleSelectLocation } = props;

  return (
    <List className={classes.locationList}>
      {LocationData.map((location, index) => (
        <ListItem
          id={location.code}
          key={index}
          onClick={handleSelectLocation}
          className={classes.locationListItem}
        >
          {location.name}
        </ListItem>
      ))}
    </List>
  );
}

LocationList.propTypes = {
  LocationData: PropTypes.shape([
    {
      id: PropTypes.number,
      name: PropTypes.string,
      code: PropTypes.string,
    },
  ]).isRequired,
  handleSelectLocation: PropTypes.func.isRequired,
};

LocationList.defaultProps = {
  LocationData: [
    {
      id: 1,
      name: "Hồ Chí Minh",
      code: "HoChiMinh",
    },
  ],
  handleSelectLocation: undefined,
};

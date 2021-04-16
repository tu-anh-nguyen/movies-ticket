import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  locationList: {
    overflowY: "scroll",
    backgroundColor: "white",
    color: "black",
    width: "90vw",
    maxWidth: "560px",
    maxHeight: "90vh",
    "&::-webkit-scrollbar": {
      width: "4px",
      backgroundColor: "#e8e3e3",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      boxShadow: "inset 0 0 6px rgb(0 0 0 / 30%)",
    },
  },
  locationListItem: {
    padding: "10px 18px",
    fontSize: "20px",
    justifyContent: "center",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "var(--primary-color)",
      color: "white",
    },
  },
}));

export default function LocationListMobile(props) {
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

LocationListMobile.propTypes = {
  LocationData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      code: PropTypes.string,
    })
  ).isRequired,
  handleSelectLocation: PropTypes.func.isRequired,
};

LocationListMobile.defaultProps = {
  LocationData: [
    {
      id: 1,
      name: "Hồ Chí Minh",
      code: "HoChiMinh",
    },
  ],
  handleSelectLocation: undefined,
};

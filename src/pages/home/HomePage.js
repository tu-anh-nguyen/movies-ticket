import React, { Component } from "react";
import Box from "@material-ui/core/Box";

import NavHeader from "../../components/header/NavHeader";
import MyCarousel from "../../components/carousel/MyCarousel";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: "Hồ Chí Minh",
      isLogin: false,
      filmList: [],
    };

    this.setCurrentLocation = this.setCurrentLocation.bind(this);
  }

  setCurrentLocation(location) {
    console.log(location);
    this.setState({
      currentLocation: location,
    });
  }

  componentDidMount() {
    const axios = require("axios");
    axios
      .get(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
      )
      .then((resp) => {
        this.setState = {
          filmList: resp.data,
        };
      });
  }

  render() {
    return (
      <Box className="home">
        <NavHeader
          isLogin={this.state.isLogin}
          currentLocation={this.state.currentLocation}
          setCurrentLocation={this.setCurrentLocation}
        />
        <Box marginTop="60px"></Box>
        <MyCarousel />
        <Box
          id="lich-chieu"
          style={{ height: "1000px", backgroundColor: "red", opacity: "0.3" }}
        ></Box>
        <Box
          id="cum-rap"
          style={{
            height: "1000px",
            backgroundColor: "yellow",
            opacity: "0.3",
          }}
        ></Box>
        <Box
          id="tin-tuc"
          style={{ height: "1000px", backgroundColor: "green", opacity: "0.3" }}
        ></Box>
        <Box
          id="ung-dung"
          style={{ height: "1000px", backgroundColor: "blue", opacity: "0.3" }}
        ></Box>
      </Box>
    );
  }
}

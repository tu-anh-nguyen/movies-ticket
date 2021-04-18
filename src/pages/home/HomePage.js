import React, {Component} from 'react';
import {Box, Container} from '@material-ui/core';

import NavHeader from '../../components/header/NavHeader';
import MyCarousel from '../../components/carousel/MyCarousel';
import MovieList from '../../components/movie-list';
import MainFooter from '../../components/footer';
export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: 'Hồ Chí Minh',
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
    const axios = require('axios');
    axios
        .get(
            'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
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
        <Box marginTop="100px">
          <Container maxWidth="md" >
            <MovieList />
          </Container>
        </Box>
        <Box
          id="cum-rap"
          style={{
            height: '1000px',
            backgroundColor: 'yellow',
            opacity: '0.3',
          }}
        ></Box>
        <Box
          id="tin-tuc"
          style={{height: '1000px', backgroundColor: 'green', opacity: '0.3'}}
        ></Box>
        <Box css={{backgroundColor: '#222222'}}>
          <Container maxWidth="md" >
          <MainFooter/>
          </Container>
        </Box>
      </Box>
    );
  }
}

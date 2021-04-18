import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import './style.scss';
import { Divider } from '../../lib/ui';

const renderCustomerService = () => (
  <>
    <Grid container>
      <Typography className="white title">CHĂM SÓC KHÁCH HÀNG</Typography>
    </Grid>
    <Grid container>
      <Typography className="white body-text" component="p">
        <b>Hotline</b>: <a className="a-white" href="tel:+8428124142">
          028 124 142
        </a>
      </Typography>
      <Typography className="white body-text" component="p"><b>Giờ làm việc</b>: 8h00-22h00 tất cả các ngày trong tuần</Typography>
      <Typography className="white body-text" component="p">
        <b>Email</b>: <a className="a-white" href="mailto:contact@nulo.vn">
          contact@nulo.vn
        </a>
      </Typography>
    </Grid>
  </>
)

const renderContantUs = () => {
  return (
    <div className="root">
      <Grid container>
        <Typography className="white title">KẾT NỐI VỚI CHÚNG TÔI</Typography>
      </Grid>
      <Grid container alignItems="center" justify="space-evenly" >
        <Grid item xs={2}>
          <a href="/" title="facebook">
            <img src='/assets/img/footer/contact/facebook.png' alt="facebook" className="img" />
          </a>
        </Grid>
        <Grid item xs={2} >
          <a href="/" title="zalo">
            <img src='/assets/img/footer/contact/zalo.png' alt="zalo" className="img" />
          </a>
        </Grid>
        <Grid item xs={2} >
          <a href="/" title="google">
            <img src='/assets/img/footer/contact/google.png' alt="google" className="img" />
          </a>
        </Grid>
      </Grid>
    </div>
  )
}

const renderApp = () => {
  return (
    <>
      <Grid container>
        <Typography className="white title">Ứng dụng</Typography>
      </Grid>
      <Grid container alignItems="center" spacing={3} >
        <Grid item xs={6}>
          <a href="/" title="Android">
            <img src='/assets/img/footer/app/app-android.png' alt="android" className="app" />
          </a>
        </Grid>
        <Grid item xs={6}>
          <a href="/" title="IOS">
            <img src='/assets/img/footer/app/app-ios.png' alt="ios" className="app" />
          </a>
        </Grid>
      </Grid>
    </>
  )
}

const renderPartner = (list) => (
  <>
    <Grid container>
      <Typography className="white title">ĐỐI TÁC</Typography>
    </Grid>
    <Grid container alignItems="center" justify="space-evenly" spacing={1}>
      {list?.map((item, index) => (
        <Grid item xs={3} key={index}>
          <a href={item.link} title={item.name}>
            <img src={item.src} alt={item.name} className="img" />
          </a>
        </Grid>
      ))}
    </Grid>
  </>
)

const renderAboutUs = () => {
  const date = new Date();
  return (
    <>
      <Divider backgroundColor="chocolate" color="white" spacing={10}><Typography className="white head-about">COPYRIGHT © {date.getFullYear()} - Nulo.vn</Typography></Divider>
      <Typography variant="body2" align="center" className="white">
        {('Trụ sở chính: Tòa nhà Nulo Tower, 54 Nguyễn Thị Thập,  P.Tân Quy, Quận 7, Tp. Hồ Chí Minh, Việt Nam').toUpperCase()}
      </Typography>
      <Typography variant="body2" align="center" className="white">
        {('Giấy phép kinh doanh số: 6000-499-598').toUpperCase()}
      </Typography>
      <Typography variant="body2" align="center" className="white">
        {('Tổng đài đặt vé: 19001722').toUpperCase()}
      </Typography>
      <br />
      <Typography variant="caption" component="p" align="center" className="white">
        © {date.getFullYear()} NuLo Co. Ltđ. All Rights Reserved
      </Typography>
      <Divider padding="1.5rem 0 0" />
    </>
  )
}
const Footer = () => {
  const list = [
    {
      name: 'BHD',
      src: '/assets/img/footer/partner/bhd.png',
      link: 'https://www.bhdstar.vn/',
    },
    {
      name: 'CGV',
      src: '/assets/img/footer/partner/cgv.png',
      link: 'https://www.bhdstar.vn/',
    },
    {
      name: 'Galaxy Cinema',
      src: '/assets/img/footer/partner/galaxycine.png',
      link: 'https://www.galaxycine.vn/',
    },
    {
      name: 'Lotte Cinema',
      src: '/assets/img/footer/partner/bhd.png',
      link: 'http://lottecinemavn.com/',
    },
    {
      name: 'CineStar',
      src: '/assets/img/footer/partner/cinestar.png',
      link: 'http://cinestar.com.vn/',
    },
    {
      name: 'MegaGS',
      src: '/assets/img/footer/partner/megags.png',
      link: 'https://www.megagscinemas.vn/',
    },
    {
      name: 'Beta',
      src: '/assets/img/footer/partner/bt.jpg',
      link: 'https://www.betacineplex.vn/',
    },
    {
      name: 'DDC',
      src: '/assets/img/footer/partner/dongdacinema.png',
      link: 'http://ddcinema.vn/',
    },
    {
      name: 'Touch Cinema',
      src: '/assets/img/footer/partner/touch.png',
      link: 'https://touchcinema.com/',
    },
    {
      name: 'MegaGS',
      src: '/assets/img/footer/partner/megags.png',
      link: 'https://www.megagscinemas.vn/',
    },
    {
      name: 'MegaGS',
      src: '/assets/img/footer/partner/megags.png',
      link: 'https://www.megagscinemas.vn/',
    },
    {
      name: 'MegaGS',
      src: '/assets/img/footer/partner/megags.png',
      link: 'https://www.megagscinemas.vn/',
    },


  ]
  return (
    <>
      <Grid container spacing={10} alignItems="flex-start">
        <Grid item xs={12} md={6} lg={4}  container>
          {renderCustomerService()}
          <img src='/assets/img/footer/dathongbao.png' alt="da-thong-bao" className="da-thong-bao" />

        </Grid>
        <Grid item xs={12} md={6} lg={4} container>
          {renderContantUs()}
          {renderApp()}
        </Grid>
        <Grid item xs={12}  md={6}  lg={4} container>
          {renderPartner(list)}
        </Grid>
      </Grid>
      {renderAboutUs()}
    </>
  )
}
export default Footer;

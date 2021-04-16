import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

import { makeStyles } from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import LinkMui from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

import L_SLIDE1 from "../../assets/img/film_background/ban-tay-diet-quy-evil-expeller-16177781815781.png";
import L_SLIDE2 from "../../assets/img/film_background/mortal-kombat-16177818818286.png";
import L_SLIDE3 from "../../assets/img/film_background/nguoi-nhan-ban-seobok-16177781610725.png";

const useStyles = makeStyles((theme) => ({
  modalCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
  },
  carouselItem: {
    backgroundColor: "black",
    position: "relative",
    width: "100%",
    paddingTop: "42.625%",
  },
  carouselItemBackground: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  },
  carouselPlayBtnWrap: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80px",
    height: "80px",
    overflow: "hidden",
    borderRadius: "50%",
    border: "2px solid white",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.7",
    },
  },
  carouselPlayBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "40px !important",
    color: "white",
  },
  carouselActive: {
    marginBottom: "5vw",
    "& li": {
      width: "12px !important",
      height: "12px !important",
      borderRadius: "50% !important",
      backgroundColor: "rgb(255, 255, 255) !important",
      opacity: "0.9 !important",
      "&.active": {
        backgroundColor: "var(--primary-color) !important",
      },
    },
  },
  carouselTrailerCloseBtn: {
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translate(-50%, -80%)",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "2px solid white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: "1",
    "&:hover": {
      opacity: "0.8",
    },
    [theme.breakpoints.up("md")]: {
      top: "0",
      left: "unset",
      right: "0",
      transform: "translate(50%, -50%)",
    },
  },
}));

export default function MyCarousel(props) {
  const classes = useStyles();
  const { filmList } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isShowTrailerVideo, setIsShowTrailerVideo] = useState(false);
  const [trailerSrc, setTrailerSrc] = useState("");
  const [isShowPlayBtn, setIsShowPlayBtn] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === filmList.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? filmList.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const handleOnLickPlayButton = (index) => () => {
    let currentFilm = filmList[index];
    setTrailerSrc(currentFilm.trailerSrc.concat("?autoplay=1"));
    setIsShowTrailerVideo(true);
  };

  const closeIsShowTrailerVideo = () => {
    setIsShowTrailerVideo(false);
  };

  const OpenIsShowPlayBtn = () => {
    setIsShowPlayBtn(true);
  };

  const CloseIsShowPlayBtn = () => {
    setIsShowPlayBtn(false);
  };

  const carouselSlide = filmList.map((item, index) => {
    return (
      <CarouselItem
        className={classes.carouselItem}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <LinkMui href="/">
          <Box
            component="img"
            className={classes.carouselItemBackground}
            src={item.backgroundSrc}
            alt={item.name}
          />
        </LinkMui>
        {isShowPlayBtn && (
          <Box
            onClick={handleOnLickPlayButton(index)}
            className={classes.carouselPlayBtnWrap}
          >
            <PlayArrowIcon className={classes.carouselPlayBtn} />
          </Box>
        )}
      </CarouselItem>
    );
  });

  return (
    <Box onMouseEnter={OpenIsShowPlayBtn} onMouseLeave={CloseIsShowPlayBtn}>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          className={classes.carouselActive}
          items={filmList}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {carouselSlide}
        <CarouselControl
          style={{ width: "140px !important" }}
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          style={{ width: "140px !important" }}
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modalCenter}
        open={isShowTrailerVideo}
        onClose={closeIsShowTrailerVideo}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Box style={{ position: "relative", outline: "none" }}>
          <Box
            onClick={closeIsShowTrailerVideo}
            className={classes.carouselTrailerCloseBtn}
          >
            <CloseIcon style={{ fontSize: "26px", color: "white" }} />
          </Box>
          <Box
            position="relative"
            paddingTop="56.25%"
            height="100px"
            width="100vw"
            maxWidth="900px"
            bgColor="black"
          >
            <iframe
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              src={trailerSrc}
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

MyCarousel.propTypes = {
  filmList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      trailerSrc: PropTypes.string,
      BackgroundSrc: PropTypes.string,
    })
  ),
};

MyCarousel.defaultProps = {
  filmList: [
    {
      name: "Ban tay cua quy",
      trailerSrc: "https://www.youtube.com/embed/lzMmYV_5-0A",
      backgroundSrc: L_SLIDE1,
    },
    {
      name: "Quai vat dai chien",
      trailerSrc: "https://www.youtube.com/embed/NYH2sLid0Zc",
      backgroundSrc: L_SLIDE2,
    },
    {
      name: "Nguoi nhan ban Seobok",
      trailerSrc: "https://www.youtube.com/embed/eFf0nos163o",
      backgroundSrc: L_SLIDE3,
    },
  ],
};

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  makeStyles,
  Box,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyle = makeStyles((theme) => ({
  component: {
    marginTop: 12,
    background: "#fff",
  },
  image: {
    height: 150,
    width: 150,
  },
  deal: {
    padding: "12px 20px",
    display: "flex",
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
    marginRight: "32px",
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: "15px",
    display: "flex",
    alignItems: "center",
  },
  viewAllButton: {
    marginLeft: "auto",
    background: "#2870f4",
    fontSize: 13,
    borderRadius: 2,
  },
  text: {
    fontSize: 15,
    marginTop: 5,
  },
  wrapper: {
    padding: "45px 15px",
  },
  slideTimer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Slide = (props) => {
  const classes = useStyle();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {hours}:{minutes}:{seconds} Left
      </span>
    );
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{props.title}</Typography>
        {props.timer && (
          <Box className={classes.slideTimer}>
            <img src={timerURL} alt="Timer URL" style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Box>
        )}
        <Button
          variant="contained"
          color="primary"
          className={classes.viewAllButton}
        >
          VIEW ALL
        </Button>
      </Box>

      <Divider />

      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        autoPlay={true}
        centerMode={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        /* removeArrowOnDeviceType={["tablet", "mobile"]} */
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {props.products.map((product) => {
          return (
            <Link to={`product/${product.id}`} key={product.id}>
              <Box
                textAlign="center"
                className={classes.wrapper}
                key={product.id}
              >
                <img
                  key={product.id}
                  src={product.url}
                  id={product.id}
                  className={classes.image}
                  alt={product.title.shortTitle}
                />
                <Typography
                  className={classes.text}
                  style={{ fontWeight: 600, color: "#212121" }}
                >
                  {product.title.shortTitle}
                </Typography>
                <Typography className={classes.text} style={{ color: "green" }}>
                  {product.discount}
                </Typography>
                <Typography
                  className={classes.text}
                  style={{ color: "#212121", opacity: 0.6 }}
                >
                  {product.tagline}
                </Typography>
              </Box>
            </Link>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Slide;

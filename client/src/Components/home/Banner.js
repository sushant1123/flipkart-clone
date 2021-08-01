import { bannerData } from "../../constants/data";
import Carousel from "react-material-ui-carousel";

import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: 280,
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      height: 180,
    },
  },
  carousel: {
    marginTop: 10,
  },
}));
const Banner = () => {
  const classes = useStyle();
  return (
    <Carousel
      animation="slide"
      navButtonsAlwaysVisible="true"
      className={classes.carousel}
      autoPlay={true}
      indicators={false}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#fff",
          color: "#494949",
          borderRadius: "0",
          margin: 0,
        },
      }}
    >
      {/* static data */}
      {bannerData.map((image, index) => {
        return (
          <img src={image} key={index} className={classes.image} alt="banner" />
        );
      })}
    </Carousel>
  );
};

export default Banner;

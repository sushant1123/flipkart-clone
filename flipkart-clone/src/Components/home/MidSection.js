import { ImageURL, coronaURL } from "../../constants/data";
import { makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
  },
  coronaHelp: {
    margin: "12px 9px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      height: 140,
    },
  },
}));
const MidSection = () => {
  const classes = useStyle();
  return (
    <>
      <Grid
        /* lg={12}
        md={12}
        sm={12}
        xs={12} */
        container
        className={classes.wrapper}
      >
        {ImageURL.map((image, index) => {
          return (
            <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
              <img
                key={index}
                src={image}
                className={classes.image}
                alt="Misection-URL"
              />
            </Grid>
          );
        })}
      </Grid>
      <img
        src={coronaURL}
        alt="Corona Img"
        className={clsx(classes.wrapper, classes.coronaHelp)}
      />
    </>
  );
};

export default MidSection;

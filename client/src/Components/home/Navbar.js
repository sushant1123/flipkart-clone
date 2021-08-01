import { navData } from "../../constants/data";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    margin: "55px 130px 0 130px",
    justifyContent: "space-between",
    overflowX: "overlay",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  item: {
    textAlign: "center",
    padding: "12px 8px",
  },
  image: {
    width: 64,
  },
  text: {
    fontWeight: 600,
  },
  link: {
    textDecoration: "none",
    color: "#494949",
    "&:hover": {
      color: "#185ADB",
    },
  },
}));

const Navbar = () => {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      {navData.map((data, index) => {
        return (
          <Box className={classes.item} key={index}>
            <img src={data.url} alt={data.text} className={classes.image} />
            <Typography className={classes.text}>
              <a href="/" className={classes.link}>
                {data.text}
              </a>
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Navbar;

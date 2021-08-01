import { Box, makeStyles } from "@material-ui/core";
import { addURL } from "../../constants/data";
import Slide from "./Slide";

const useStyle = makeStyles((theme) => ({
  components: {
    padding: 10,
    backgroundColor: "#f1f3f6",
  },
  leftComponent: {
    width: "83%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  rightComponent: {
    padding: "12px 10px",
    background: "#fff",
    margin: "12px 0 0 10px",
    width: "17%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const MidSlide = ({ products }) => {
  const classes = useStyle();
  return (
    <Box style={{ display: "flex" }} className={classes.component}>
      <Box className={classes.leftComponent}>
        <Slide timer={true} title="Deal of the Day!" products={products} />
      </Box>
      <Box className={classes.rightComponent}>
        <img src={addURL} alt="add" style={{ width: 232, height: 360 }} />
      </Box>
    </Box>
  );
};
export default MidSlide;

import { Box, Button, makeStyles } from "@material-ui/core";
import { ShoppingCart, FlashOn } from "@material-ui/icons";
import { addToCart } from "../../redux/actions/CartActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

//paytm payment
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const useStyles = makeStyles((theme) => ({
  leftContainer: {
    minWidth: "40%",
    padding: "40px 0 0 80px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 40px",
    },
  },
  productImg: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "90%",
    /*  [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "120%",
    }, */
  },
  button: {
    color: "#fff",
    height: 50,
    width: "40%",
    margin: 10,
    borderRadius: 2,
    [theme.breakpoints.down("md")]: {
      fontSize: 10,
      height: 40,
      width: "40%",
      margin: 5,
    },
  },
  addToCart: {
    backgroundColor: "#ff9f00",
  },
  buyNow: {
    backgroundColor: "#fb641b",
  },
  icon: {
    fontSize: 20,
  },
}));

const ActionItems = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const addToCartHandler = () => {
    dispatch(addToCart(props.product.id));
    history.push("/cart");
  };

  const buyNowClickHandler = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "sushantbahirat40@gmail.com",
    });

    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };

    post(information);
  };

  return (
    <Box className={classes.leftContainer}>
      <img
        src={props.product.url}
        className={classes.productImg}
        alt={props.product.title.shortTitle}
      />
      <Button
        variant="contained"
        className={clsx(classes.button, classes.addToCart)}
        onClick={addToCartHandler}
      >
        <ShoppingCart className={classes.icon} /> Add to Cart
      </Button>
      <Button
        variant="contained"
        className={clsx(classes.button, classes.buyNow)}
        onClick={buyNowClickHandler}
      >
        <FlashOn className={classes.icon} />
        Buy Now
      </Button>
    </Box>
  );
};
export default ActionItems;

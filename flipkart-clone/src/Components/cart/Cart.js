import { Box, Typography, makeStyles, Button, Grid } from "@material-ui/core";
//import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import CartItem from "./CartItem";
import { removeFromCart } from "../../redux/actions/CartActions";
import EmptyCart from "./EmptyCart";
import CartSummary from "./CartSummary";
import { post } from "../../utils/paytm.js";
import { payUsingPaytm } from "../../service/api";

const useStyle = makeStyles((theme) => ({
  component: {
    padding: "30px 135px",
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      padding: "15px 0",
    },
  },
  leftComponent: {
    paddingRight: 15,
    [theme.breakpoints.down("sm")]: {
      margin: "15px",
    },
  },
  /* rightComponent: {}, */
  header: {
    padding: "15px 25px",
    background: "#fff",
  },
  bottom: {
    padding: "15px 22px",
    background: "#fff",
    borderTop: "1px solid #f0f0f0",
    boxShadow: "0 -2px 10px 0 rgba(0,0,0, 0.1)",
  },
  placeOrderBtn: {
    color: "#fff",
    backgroundColor: "orange",
    borderRadius: 2,
    width: 250,
    height: 50,
    display: "flex",
    marginLeft: "auto",

    "&:hover": {
      backgroundColor: "orange",
    },

    [theme.breakpoints.down("md")]: {
      width: 200,
      height: 40,
    },
    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 40,
    },
  },
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  //css
  const classes = useStyle();

  /* useEffect(() => {
        console.log(cartItems);
    }); */

  const placeOrderHandler = async () => {
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
    <>
      {cartItems.length ? (
        <Grid container className={classes.component}>
          <Grid
            item
            lg={9}
            md={9}
            sm={12}
            xs={12}
            className={classes.leftComponent}
          >
            <Box className={classes.header}>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart({cartItems.length})
              </Typography>
            </Box>

            {cartItems.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  removeFromCart={removeItemFromCart}
                />
              );
            })}
            <Box className={classes.bottom}>
              <Button
                variant="contained"
                className={classes.placeOrderBtn}
                onClick={placeOrderHandler}
              >
                Place Order
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <CartSummary cartItems={cartItems} />
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;

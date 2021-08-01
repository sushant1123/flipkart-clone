import { Box, Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

const useStyle = makeStyles((theme) => ({
  component: {
    backgroundColor: "#fff",
    marginLeft: 30,
    [theme.breakpoints.down("sm")]: {
      margin: "0 15px",
    },
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  header: {
    padding: "16px 24px",
    borderBottom: "1px solid #f0f0f0",
  },
  container: {
    padding: "15px 24px",
    "& > *": {
      marginTop: 20,
      fontSize: 14,
      [theme.breakpoints.down("md")]: {
        marginTop: 16,
      },
      [theme.breakpoints.up("md")]: {
        margin: 15,
      },
    },
  },
  greyText: {
    color: "gray",
  },
  price: {
    float: "right",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 600,
    borderTop: "1px dashed #e0e0e0",
    padding: "20px 0",
    borderBottom: "1px dashed #e0e0e0",
  },
  saveLineText: {
    color: "green",
  },
}));
const CartSummary = ({ cartItems }) => {
  //css
  const classes = useStyle();

  //state
  const [cartPrice, setCartPrice] = useState(0);
  const [cartDiscount, setCartDiscount] = useState(0);

  useEffect(() => {
    const findTotalCartAmount = () => {
      //whenever this fn runs it should start taking values from 0 and not the prev state
      let currentPrice = 0,
        currentDiscount = 0;

      cartItems.map((item) => {
        currentPrice += item.price.mrp;
        currentDiscount += item.price.mrp - item.price.cost;
        return () => {};
      });

      setCartPrice(currentPrice);
      setCartDiscount(currentDiscount);
    };
    findTotalCartAmount();
  }, [cartItems]);

  return (
    <Box className={classes.component}>
      <Box className={classes.header}>
        <Typography className={classes.greyText}>PRICE DETAILS</Typography>
      </Box>
      <Box className={classes.container}>
        <Typography>
          Price ({cartItems.length} item)
          <span className={classes.price}>₹{cartPrice}</span>
        </Typography>
        <Typography>
          Discount<span className={classes.price}>-₹{cartDiscount}</span>
        </Typography>
        <Typography>
          Delivery Charge
          <span className={classes.price}>
            {cartPrice - cartDiscount > 1000 ? "Free" : "₹40"}
          </span>
        </Typography>
        <Typography className={classes.totalAmount}>
          Total Amount :
          <span className={classes.price}>
            {cartPrice - cartDiscount > 1000
              ? cartPrice - cartDiscount
              : cartPrice - cartDiscount + 40}
          </span>
        </Typography>
        <Typography className={classes.saveLineText}>
          You will save ₹
          {cartPrice - cartDiscount > 1000 ? cartDiscount : cartDiscount - 40}{" "}
          on this order.
        </Typography>
      </Box>
    </Box>
  );
};

export default CartSummary;

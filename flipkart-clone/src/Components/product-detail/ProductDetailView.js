import { makeStyles, Typography, Box, Grid } from "@material-ui/core";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import AvailableOffers from "../offers/AvailableOffers";
import clsx from "clsx";
import ActionItems from "./ActionItems";
import ProductDetail from "./ProductDetail";

const useStyles = makeStyles((theme) => ({
  component: {
    backgroundColor: "#f2f2f2",
  },
  container: {
    display: "flex",
    padding: 20,
    background: "#fff",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
    [theme.breakpoints.down("md")]: {
      margin: "auto",
    },
  },

  rightContainer: {
    padding: "0 30px",
    marginTop: 50,
    "& > *": {
      margin: "10px 0",
    },
  },
  titleText: {
    fontSize: 20,
    fontWeight: 600,
  },
  grayText: {
    color: "gray",
  },
  price: {
    marginRight: 20,
    fontWeight: 600,
    fontSize: 28,
  },
}));

const ProductDetailView = (props) => {
  const classes = useStyles();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const productId = props.match.params.id;

  const { product } = useSelector((state) => state.getProductDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(productId));
  }, [dispatch, productId]);

  return (
    <Box className={classes.component}>
      {product && Object.keys(product).length && (
        <Grid container className={classes.container}>
          <Grid lg={4} md={4} sm={8} xs={12} item>
            <ActionItems product={product} />
          </Grid>

          <Grid
            item
            lg={8}
            md={8}
            sm={8}
            xs={12}
            className={classes.rightContainer}
          >
            <Typography className={classes.titleText}>
              {product.title.longTitle}
            </Typography>
            <Typography className={clsx(classes.smallText, classes.grayText)}>
              4 Ratings and 10 Reviews
              <span>
                <img
                  src={fassured}
                  alt="fassured"
                  style={{ width: 77, marginLeft: 20 }}
                />
              </span>
            </Typography>
            <Typography>
              <span className={classes.price}>₹{product.price.cost}</span>
              <span className={classes.grayText}>
                ₹<strike>{product.price.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388C3C" }}>
                {product.price.discount} off
              </span>
            </Typography>

            <AvailableOffers />

            <ProductDetail product={product} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ProductDetailView;

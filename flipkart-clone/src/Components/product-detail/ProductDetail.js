import {
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
} from "@material-ui/core";

//components

const useStyle = makeStyles({
  smallText: {
    fontSize: 14,
    verticalAlign: "baseline",
  },
  grayText: {
    color: "gray",
  },
  superCoinImage: {
    width: "95%",
  },
});

const ProductDetail = ({ product }) => {
  const classes = useStyle();

  //date for delivery
  const date = new Date(new Date().getTime() + (5 + 24 + 60 * 60 * 1000));

  //seller Image
  const sellerURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  return (
    <Table>
      <TableBody>
        <TableRow className={classes.smallText}>
          <TableCell className={classes.grayText}>Delivery</TableCell>
          <TableCell style={{ fontWeight: 600 }}>
            {date.toDateString()} |{" "}
            {product.price.mrp - product.price.cost > 1000 ? "Free" : "₹40"}
          </TableCell>
        </TableRow>

        <TableRow className={classes.smallText}>
          <TableCell className={classes.grayText}>Warranty</TableCell>
          <TableCell>No Warranty</TableCell>
        </TableRow>

        <TableRow className={classes.smallText}>
          <TableCell className={classes.grayText}>Seller</TableCell>
          <TableCell className={classes.smallText}>
            <Typography style={{ color: "#2874f0" }}>SuperComNet</Typography>
            <Typography>GST Invoice available</Typography>
            <Typography>14 days return policy</Typography>
            <Typography>View more sellers starting from ₹300</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell colSpan={2}>
            <img
              className={classes.superCoinImage}
              src={sellerURL}
              alt="SellerImg"
            />
          </TableCell>
        </TableRow>

        <TableRow className={classes.smallText}>
          <TableCell className={classes.grayText}>Description</TableCell>
          <TableCell>{product.description}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ProductDetail;

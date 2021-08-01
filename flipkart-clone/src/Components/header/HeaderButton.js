import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components
import Login from "../login/Login";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";

const useStyles = makeStyles((theme) => ({
  login: {
    backgroundColor: "#fff",
    padding: "5px 40px",
    textTransform: "none",
    fontSize: 15,
    fontWeight: 600,
    color: "#2874f0",
    boxShadow: "none",
    borderRadius: "0",
    "&:hover": {
      backgroundColor: "#fff",
    },

    [theme.breakpoints.down("sm")]: {
      color: "#fff",
      backgroundColor: "#2874f0",
      "&:hover": {
        backgroundColor: "#2874f0",
      },
    },
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    alignItems: "center",
    "& > *": {
      marginRight: 50,
      fontSize: 15,
      textDecoration: "none",
      color: "#fff",
      [theme.breakpoints.down("sm")]: {
        color: "#2874f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
      },
    },

    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  container: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
}));
const HeaderButtons = () => {
  //cart state
  const { cartItems } = useSelector((state) => state.cart);
  //css
  const classes = useStyles();

  //state
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginButtonClick = () => {
    setIsOpen(true);
  };

  //context
  const { account, setAccount } = useContext(LoginContext);

  return (
    <Box className={classes.wrapper}>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Link to="/">
          <Button
            variant="contained"
            className={classes.login}
            onClick={handleLoginButtonClick}
          >
            Login
          </Button>
        </Link>
      )}
      <Link to="/more">
        <Typography style={{ fontSize: 17 }}>More</Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
      <Login open={isOpen} setIsOpen={setIsOpen} setAccount={setAccount} />
    </Box>
  );
};

export default HeaderButtons;

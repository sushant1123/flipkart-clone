import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
  IconButton,
  Drawer,
  withStyles,
  List,
  ListItem,
} from "@material-ui/core";

import HeaderButtons from "./HeaderButton";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

//icons
import { Menu } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "#2874f0",
    height: 60,
  },
  logo: {
    width: 85,
    marginRight: 20,
  },
  subURL: {
    width: 9,
    margin: "4px",
    height: 10,
  },
  container: {
    display: "flex",
  },
  component: {
    marginLeft: "12%",
    marginTop: 4,
    lineHeight: 0,
    textDecoration: "none",
    color: "#fff",
  },
  subHeading: {
    fontSize: 12,
    fontStyle: "Italic",
  },
  drawerList: {
    width: 250,
  },
  menuBtn: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  headerBtns: {
    margin: "0 7% 0 auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "5%",
    },
  },
}));

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

const Header = () => {
  const classes = useStyles();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [isOpen, setIsOpen] = useState(false);

  //drawer actions
  const handleMenuIconClick = () => {
    setIsOpen(true);
  };
  const handleMenuIconClose = () => {
    setIsOpen(false);
  };

  //drawer list
  const drawerList = () => {
    return (
      <Box className={classes.drawerList} onClick={handleMenuIconClose}>
        <List>
          <ListItem button>
            <HeaderButtons />
          </ListItem>
        </List>
      </Box>
    );
  };

  return (
    <AppBar className={classes.header}>
      <ToolBar>
        <IconButton
          color="inherit"
          className={classes.menuBtn}
          onClick={handleMenuIconClick}
        >
          <Menu />
        </IconButton>

        <Drawer open={isOpen} onClose={handleMenuIconClose}>
          {drawerList()}
        </Drawer>

        <Link to="/" className={classes.component}>
          <img src={logoURL} alt="Flipkart" className={classes.logo} />
          <Box className={classes.container}>
            <Typography className={classes.subHeading}>
              Explore
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </Typography>
            <img
              src={subURL}
              alt="Flipkart Logo subURL"
              className={classes.subURL}
            />
          </Box>
        </Link>
        <SearchBar />
        <span className={classes.headerBtns}>
          <HeaderButtons />
        </span>
      </ToolBar>
    </AppBar>
  );
};

export default Header;

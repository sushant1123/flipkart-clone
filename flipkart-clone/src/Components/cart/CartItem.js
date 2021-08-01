import { Card, Typography, Box, makeStyles, Button } from "@material-ui/core";
import clsx from "clsx";
import CartItemButtons from "./CartItemButtons";

const useStyle = makeStyles({
    component: {
        display: "flex",
        borderRadius: 0,
        borderTop: "1px solid $f0f0f0",
    },
    leftComponent: {
        margin: 20,
        display: "flex",
        flexDirection: "column",
    },
    rightComponent: {
        margin: 20,
    },
    smallText: {
        fontSize: 14,
    },
    greyText: {
        color: "#878787",
    },
    price: {
        fontSize: 18,
        fontWeight: 600,
    },
    image: {
        height: 100,
        width: 100,
    },
    removeBtn: {
        marginTop: 33,
        fontSize: 16,
    },
});
const CartItem = ({ item, removeFromCart }) => {
    const classes = useStyle();
    const fassured =
        "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src={item.url} alt={item.title.shortTitle} className={classes.image} />
                <CartItemButtons />
            </Box>
            <Box className={classes.rightComponent}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography
                    className={clsx(classes.smallText, classes.greyText)}
                    style={{ marginTop: 10 }}
                >
                    Seller: SuperComNet
                    <img
                        src={fassured}
                        alt="Flipkart Assured"
                        style={{ width: 50, marginLeft: 20 }}
                    />
                </Typography>
                <Typography style={{ marginTop: 15 }}>
                    <span className={classes.price}>₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span className={classes.greyText}>
                        <strike>₹{item.price.mrp}</strike>
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span style={{ color: "green" }}>{item.price.discount} off</span>
                    &nbsp;&nbsp;&nbsp;
                </Typography>
                <Button className={classes.removeBtn} onClick={() => removeFromCart(item.id)}>
                    REMOVE
                </Button>
            </Box>
        </Card>
    );
};

export default CartItem;

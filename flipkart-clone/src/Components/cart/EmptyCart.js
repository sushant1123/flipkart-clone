import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
    component: {
        margin: "80px 140px",
        width: "80%",
        background: "#fff",
        paddingBottom: 40,
    },
    container: {
        paddingTop: 10,
        textAlign: "center",
        "& > *": {
            marginTop: 10,
            fontSize: 14,
        },
    },
    image: {
        width: "15%",
    },
    header: {
        padding: "15px 25px",
        fontWeight: 600,
        fontSize: 18,
    },
    shopNowBtn: {
        color: "#fff",
        background: "#2874f0",
        marginTop: 20,
        padding: "12px 70px",
        borderRadius: 2,
        fontSize: 14,
        "&:hover": {
            background: "#2874f0",
        },
    },
});
const EmptyCart = () => {
    const classes = useStyle();

    //after clicking on a btn need to go to specific route
    const history = useHistory();

    const handleShopNowClick = () => {
        history.push("/");
    };

    const emptyCartURL =
        "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
    return (
        <Box className={classes.component}>
            <Typography className={classes.header}>My Cart</Typography>
            <Box className={classes.container}>
                <img className={classes.image} src={emptyCartURL} alt="Empty Cart" />
                <Typography style={{ fontSize: 18, fontWeight: 600 }}>
                    Your cart is empty!
                </Typography>
                <Typography>Add items to it now.</Typography>
                <Button
                    variant="contained"
                    className={classes.shopNowBtn}
                    onClick={handleShopNowClick}
                >
                    Shop Now
                </Button>
            </Box>
        </Box>
    );
};

export default EmptyCart;

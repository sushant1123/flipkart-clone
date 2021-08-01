import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyle = makeStyles({
    cartItemBtns: {
        marginTop: 30,
    },
    buttons: {
        borderRadius: "50%",
    },
});
const CartItemButtons = () => {
    //css
    const classes = useStyle();
    //state
    const [cartItemCount, setCartItemCount] = useState(1);

    //onClick fns
    const handleIncrement = () => {
        return setCartItemCount((count) => {
            return count + 1;
        });
    };
    const handleDecrement = () => {
        return setCartItemCount((count) => {
            return count - 1;
        });
    };

    return (
        <ButtonGroup className={classes.cartItemBtns}>
            <Button
                className={classes.buttons}
                onClick={handleDecrement}
                disabled={cartItemCount === 1}
            >
                -
            </Button>
            <Button>{cartItemCount}</Button>
            <Button className={classes.buttons} onClick={handleIncrement}>
                +
            </Button>
        </ButtonGroup>
    );
};

export default CartItemButtons;

import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    offers: {
        "& .MuiTypography-root span span > *": {
            fontWeight: 600,
        },
        "& > *": {
            marginTop: 10,
        },
    },
    fbadge: {
        fontSize: 14,
        height: 18,
        width: 18,
        marginRight: 10,
    },
});

const AvailableOffers = () => {
    const classes = useStyles();

    const fbadge =
        "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90";

    return (
        <Box>
            <Typography style={{ fontWeight: 600 }}> Available offers</Typography>
            <Box className={classes.offers}>
                <Typography>
                    <span>
                        <img className={classes.fbadge} src={fbadge} alt="Flipkart-Badge" />
                        <span>
                            <span>Bank Offer</span> 10% off on ICICI Bank Credit Cards, up to ₹750.
                            On orders of ₹5000 and above.
                        </span>
                    </span>
                </Typography>
                <Typography>
                    <span>
                        <img className={classes.fbadge} src={fbadge} alt="Flipkart-Badge" />
                        <span>
                            <span>Bank Offer</span> 10% off on ICICI Bank Debit Cards, up to ₹500.
                            On orders of ₹5000 and above.
                        </span>
                    </span>
                </Typography>
                <Typography>
                    <span>
                        <span>
                            <img className={classes.fbadge} src={fbadge} alt="Flipkart-Badge" />
                            <span>Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank
                            Credit Card.
                        </span>
                    </span>
                </Typography>
                <Typography>
                    <span>
                        <span>
                            <img className={classes.fbadge} src={fbadge} alt="Flipkart-Badge" />
                            <span>Special Price</span> Extra ₹11901 off(price inclusive of discount)
                        </span>
                    </span>
                </Typography>
                {/* <Typography>
                    <span>
                        <span>
                            <img className={classes.fbadge} src={fbadge} alt="Flipkart-Badge" />
                            <span>Bank Offer</span> 20% off on 1st txn with Amex Network Cards
                            issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik.
                        </span>
                    </span>
                </Typography>
                <Typography>
                    <span>
                        <span>
                            <img className={classes.fbadge} src={fbadge} alt="Flipkart-Badge" />
                            <span>Bank Offer</span> Flat ₹100 off on first Flipkart Pay Later order
                            of ₹500 and above.
                        </span>
                    </span>
                </Typography>

                <Typography>
                    <span>
                        <span>
                            <img className={classes.fbadge} src={fbadge} alt="Flipkart-Badge" />
                            <span>EMI</span> starting from ₹2,325/monthView Plans
                        </span>
                    </span>
                </Typography> */}
            </Box>
        </Box>
    );
};

export default AvailableOffers;

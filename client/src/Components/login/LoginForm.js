import { Button, makeStyles, Box, Typography, TextField, Link } from "@material-ui/core";
import { useState } from "react";

import { loginURL } from "../../constants/data";
import { authenticateLogin } from "../../service/api";

const useStyles = makeStyles({
    image: {
        backgroundImage: `url(${loginURL})`,

        backgroundRepeat: "no-repeat",
        background: "#2874f0",
        height: "75vh",
        width: "40%",
        backgroundPosition: "center 85%",
        padding: "45px 35px",
        "& > *": {
            color: "white",
            fontWeight: 600,
        },
    },
    loginDialog: {
        display: "flex",
    },
    loginInputs: {
        padding: "35px",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        "& > *": {
            marginTop: 20,
        },
    },
    conditionsLink: {
        color: "#2874f0",
        "&:hover": {
            textDecoration: "none",
        },
    },
    conditionsText: {
        color: "#878787",
        fontSize: 12,
    },

    loginButton: {
        background: "#fb641b",
        color: "#fff",
        padding: 10,
        borderRadius: 0,
        fontSize: 15,
        "&:hover": {
            background: "#fb641b",
        },
        textTransform: "none",
    },
    otpButton: {
        color: "#2874f0",
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .2)",
        textTransform: "none",
        background: "#fff",
    },
    newUserURL: {
        color: "#2874f0",
        textAlign: "center",
        marginTop: "auto",
        fontWeight: 600,
        "&:hover": {
            textDecoration: "none",
        },
        cursor: "pointer",
    },
    error: {
        color: "red",
        fontSize: 10,
        fontWeight: 600,
        marginTop: 10,
        lineHeight: 0,
    },
});

const userInitialLoginValues = {
    username: "",
    password: "",
};

const LoginForm = (props) => {
    const classes = useStyles();

    //state
    const [loginUser, setLoginUser] = useState(userInitialLoginValues);
    const [error, setError] = useState(false);

    const handleNewUserClick = () => {
        props.setPage("signUp");
    };

    const handleLoginInputChange = (event) => {
        let { name, value } = event.target;
        setError(false);
        setLoginUser({ ...loginUser, [name]: value });
    };

    const handleLoginButtonClick = async () => {
        let response = await authenticateLogin(loginUser);

        if (!response) {
            setError(true);
            return;
        }
        props.setAccount(loginUser.username);
        props.onClose();
    };

    return (
        <Box className={classes.loginDialog}>
            <Box className={classes.image}>
                <Typography variant="h5">Login</Typography>
                <Typography
                    style={{
                        marginTop: 20,
                        color: "#dbdbdb",
                        fontSize: 17,
                    }}
                >
                    Get access to your Orders, Wishlist and Recommendations
                </Typography>
            </Box>
            <Box className={classes.loginInputs}>
                <TextField
                    name="username"
                    onChange={handleLoginInputChange}
                    value={loginUser.username}
                    label="Enter Email/Mobile Number"
                />
                <TextField
                    name="password"
                    onChange={handleLoginInputChange}
                    value={loginUser.password}
                    label="Enter Password"
                />
                {error && (
                    <Typography className={classes.error}>Invalid Username or Password</Typography>
                )}
                <Typography className={classes.conditionsText}>
                    By continuing, you agree to Flipkart's{" "}
                    <Link href="#" className={classes.conditionsLink}>
                        Terms of Use
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className={classes.conditionsLink}>
                        Privacy Policy
                    </Link>
                    .
                </Typography>
                <Button
                    variant="contained"
                    className={classes.loginButton}
                    onClick={handleLoginButtonClick}
                >
                    Login
                </Button>
                <Typography style={{ textAlign: "center" }}>OR</Typography>
                <Button variant="contained" className={classes.otpButton}>
                    Request OTP
                </Button>
                <Typography className={classes.newUserURL} onClick={handleNewUserClick}>
                    New to Flipkart? Create an account
                </Typography>
            </Box>
        </Box>
    );
};

export default LoginForm;

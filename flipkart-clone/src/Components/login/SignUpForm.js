import { Button, makeStyles, Box, Typography, TextField } from "@material-ui/core";
import { useState } from "react";

import { loginURL } from "../../constants/data";
import { authenticateSignUp } from "../../service/api";

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
            marginTop: 15,
        },
    },

    signUpBtn: {
        background: "#fb641b",
        color: "#fff",
        padding: 10,
        borderRadius: 0,
        fontSize: 15,
        marginTop: 35,
        "&:hover": {
            background: "#fb641b",
        },
        textTransform: "none",
    },
});

//initial user object includes empty values
const userInitialSignUpValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
};

const SignUpForm = (props) => {
    //for styles
    const classes = useStyles();

    //states hook
    const [newUser, setNewUser] = useState(userInitialSignUpValues);

    //on signup button click
    const onSignUp = async () => {
        let response = await authenticateSignUp(newUser);
        if (!response) return;
        props.onClose();
        props.setAccount(newUser.username);
    };

    //handleInputChange fn
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewUser({ ...userInitialSignUpValues, [name]: value });
    };
    //console.log(newUser);

    return (
        <Box className={classes.loginDialog}>
            <Box className={classes.image}>
                <Typography variant="h5">Looks like you're new here!</Typography>
                <Typography
                    style={{
                        marginTop: 20,
                        color: "#dbdbdb",
                        fontSize: 17,
                    }}
                >
                    Sign up with your mobile number to get started
                </Typography>
            </Box>
            <Box className={classes.loginInputs}>
                <TextField
                    onChange={handleInputChange}
                    name="firstname"
                    value={newUser.firstName}
                    label="Enter First Name"
                />
                <TextField
                    onChange={handleInputChange}
                    name="lastname"
                    value={newUser.lastname}
                    label="Enter Last Name"
                />
                <TextField
                    onChange={handleInputChange}
                    name="username"
                    value={newUser.username}
                    label="Enter Username"
                />
                <TextField
                    onChange={handleInputChange}
                    name="email"
                    value={newUser.email}
                    label="Enter Email"
                />
                <TextField
                    onChange={handleInputChange}
                    name="password"
                    value={newUser.password}
                    label="Enter Password"
                />
                <TextField
                    onChange={handleInputChange}
                    name="phone"
                    value={newUser.phone}
                    label="Enter Phone Number"
                />

                <Button variant="contained" className={classes.signUpBtn} onClick={onSignUp}>
                    SignUp
                </Button>
            </Box>
        </Box>
    );
};

export default SignUpForm;

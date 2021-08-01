import { Dialog, DialogContent, makeStyles } from "@material-ui/core";
import { useState } from "react";

//components
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const useStyles = makeStyles({
    component: {
        height: "75vh",
        width: "95vh",
    },
    loginDialog: {
        display: "flex",
    },
});

const Login = (props) => {
    const [page, setPage] = useState("login");

    const handleClose = () => {
        props.setIsOpen(false);
        setPage("login");
    };

    const classes = useStyles();

    return (
        <Dialog open={props.open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                {page === "login" ? (
                    <LoginForm
                        setPage={setPage}
                        onClose={handleClose}
                        setAccount={props.setAccount}
                    />
                ) : (
                    <SignUpForm onClose={handleClose} setAccount={props.setAccount} />
                )}
            </DialogContent>
        </Dialog>
    );
};

export default Login;

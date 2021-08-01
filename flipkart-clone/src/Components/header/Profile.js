import { Typography, Menu, MenuItem, makeStyles } from "@material-ui/core";
import { PowerSettingsNew } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    component: {
        marginTop: 25,
    },
    logout: {
        marginLeft: 6,
        fontSize: 12,
    },
});

const Profile = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const classes = useStyles();

    const handleClose = () => {
        setIsOpen(false);
        props.setAccount("");
    };

    const handleClick = (event) => {
        setIsOpen(event.currentTarget);
    };
    return (
        <>
            <Link style={{ marginTop: 4 }}>
                <Typography onClick={handleClick} style={{ fontSize: 17 }}>
                    {props.account}
                </Typography>
            </Link>
            <Menu
                className={classes.component}
                anchorEl={isOpen}
                open={Boolean(isOpen)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <PowerSettingsNew fontSize="small" />
                    <Typography className={classes.logout}> Logout </Typography>
                </MenuItem>
            </Menu>
        </>
    );
};

export default Profile;

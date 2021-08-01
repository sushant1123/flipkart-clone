import User from "../model/userSchema.js";

export const userSignUp = async (req, res) => {
    try {
        const exist = await User.findOne({ username: req.body.username });
        if (exist) {
            return res.status(409).send().json("username already exists");
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();

        res.status(200).json("Your SignUp is Successful");
        //return "Successfull";
    } catch (error) {
        console.log(error.message);
    }
};

export const userLogin = async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password,
        });

        if (user) {
            res.status(200).json("Login Successfull");
        } else {
            res.status(401).json("Invalid Login...");
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
};

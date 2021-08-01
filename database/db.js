import mongoose from "mongoose";
import dotenv from "dotenv";

export const connection = async (URL) => {
	try {
		mongoose.set("useCreateIndex", true); //as ensureIndex is deprecated
		await mongoose.connect(URL + process.env.DB_NAME, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
		});

		console.log("Successfully connected to the DB");
	} catch (error) {
		console.log(error.message);
	}
};

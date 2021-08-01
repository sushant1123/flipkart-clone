//file
import { connection } from "./database/db.js";
import DefaultData from "./default.js";
import Routes from "./routes/routes.js";

//packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { v4 as uuid } from "uuid";

const app = express();

const port = process.env.PORT || 8000;

//to initialize .env file
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.hxqnm.mongodb.net/`;

connection(process.env.MONGODB_URI || URL);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());

//routes
app.use("/", Routes);

app.listen(port, () => {
	console.log("Server is listening on port " + port);
});

//default data should go to db
DefaultData();

export const paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"] = uuid();
paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"] = "100";
paytmParams["CALLBACK_URL"] = "http://localhost:8000/callback";
paytmParams["EMAIL"] = process.env.EMAIL;
paytmParams["MOBILE_NO"] = process.env.MOBILE_NO;

/* 
FaxHVh23430201426663 mine
yWcMpn25965505313903 yt
 */

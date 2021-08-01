import PaytmChecksum from "../paytm/PaytmChecksum.js";
import { paytmMerchantKey, paytmParams } from "../server.js";

//packages
import formidable from "formidable";
import dotenv from "dotenv";
import https from "https";

//to get data from .env file
dotenv.config();

export const addPaymentGateway = async (req, res) => {
	//paytmMerchantKey, paytmParams
	let paytmChecksum = await PaytmChecksum.generateSignature(
		paytmParams,
		paytmMerchantKey
	);
	try {
		let params = { ...paytmParams, CHECKSUMHASH: paytmChecksum };
		res.json(params);
	} catch (error) {
		console.log("Error:", error);
	}
};

export const paymentResponse = (req, res) => {
	const form = new formidable.IncomingForm();
	let paytmCheckSum = req.body.CHECKSUMHASH;
	delete req.body.CHECKSUMHASH; // to not let hackers access this

	// need to verify if anyone not hacked the checksum
	let merchantKey = process.env.PAYTM_MERCHANT_KEY;
	let isVerifiedSignature = PaytmChecksum.verifySignature(
		req.body,
		merchantKey,
		paytmCheckSum
	);

	if (isVerifiedSignature) {
		paytmParams["MID"] = req.body.MID;
		paytmParams["ORDERID"] = req.body.ORDERID;

		//to generate new signature
		/* let post_response = */ PaytmChecksum.generateSignature(
			paytmParams,
			merchantKey
		).then((checksum) => {
			paytmParams["CHECKSUMHASH"] = checksum;

			let post_data = JSON.stringify(paytmParams);

			let options = {
				hostname: "securegw-stage.paytm.in",
				port: 443,
				path: "/order/status",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Content-Length": post_data.length,
				},
			};

			let resp = "";
			let post_req = https.request(options, (post_res) => {
				post_res.on("data", (chunk) => {
					resp += chunk;
				});

				post_res.on("end", () => {
					let result = JSON.parse(resp);
					res.redirect("http://localhost:3000/");
				});
			});

			post_req.write(post_data);
			post_req.end();
		});
	} else {
		console.log("CHECKSUM mismatched");
	}
};

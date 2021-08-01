import axios from "axios";

const url = "";

export const authenticateSignUp = async (user) => {
	try {
		//console.log(url + "/signup");
		await axios.post(url + "/signup", user);
		return "Successfull";
	} catch (error) {
		console.log("error while calling signup api");
	}
	return "error";
};

export const authenticateLogin = async (user) => {
	try {
		return await axios.post(url + "/login", user);
	} catch (error) {
		console.log("Error: error while calling signup api", error);
	}
};

export const payUsingPaytm = async (data) => {
	try {
		let response = await axios.post(`${url}/payment`, data);
		return response.data;
	} catch (error) {
		console.log("Error: error while calling payment api", error);
	}
};

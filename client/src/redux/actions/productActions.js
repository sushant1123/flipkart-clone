import axios from "axios";
import * as action from "../constants/productConstant";

//we connect to our backend port here

const URL = ""; //changed while pushing to heroku
export const getProducts = () => async (dispatch) => {
	try {
		const { data } = await axios.get(`${URL}/products`);

		dispatch({ type: action.GET_PRODUCTS_SUCCESS, payload: data });

		//console.log(data);
	} catch (error) {
		dispatch({ type: action.GET_PRODUCTS_FAIL, payload: error.message });
		console.log("Error while calling products api");
	}
};

export const getProductDetails = (id) => async (dispatch) => {
	try {
		const { data } = await axios.get(`${URL}/product/${id}`);
		dispatch({ type: action.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: action.GET_PRODUCT_DETAILS_FAIL,
			payload: error.message,
		});
		console.log("Error while calling product/:id api");
	}
};

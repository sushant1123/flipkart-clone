import axios from "axios";
import * as action from "../constants/cartConstant";

const URL = "";

export const addToCart = (id) => async (dispatch) => {
	//redux thunk call to call a middleware
	try {
		const { data } = await axios.get(`${URL}/product/${id}`);
		dispatch({ type: action.ADD_TO_CART, payload: data });
	} catch (error) {
		//dispatch({ type: action.GET_PRODUCT_DETAILS_FAIL, payload: error.message });
		console.log("Error while logging addToCart api.");
	}
};

export const removeFromCart = (id) => (dispatch) => {
	dispatch({ type: action.REMOVE_FROM_CART, payload: id });
};

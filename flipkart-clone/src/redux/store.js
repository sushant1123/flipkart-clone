import { createStore, combineReducers, applyMiddleware } from "redux";

//redux middleware to write action creators that returns a function instead of an action
import thunk from "redux-thunk";

//for no store issue on redux component
import { composeWithDevTools } from "redux-devtools-extension";

//component
import { getProductsReducer, getProductsDetailsReducer } from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

//to combine multiple reducers
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductsDetailsReducer,
    cart: cartReducer,
});

const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

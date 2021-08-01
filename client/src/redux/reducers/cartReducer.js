import * as actionType from "../constants/cartConstant";

const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exists = state.cartItems.find((product) => product.id === item.id);
            if (exists) return;
            return { ...state, cartItems: [...state.cartItems, item] };

        case actionType.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => {
                    return item.id !== action.payload;
                }),
            };
        default:
            return state;
    }
};

export default cartReducer;

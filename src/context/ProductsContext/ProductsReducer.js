const products = (state, action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return {
                ...state,
                allProducts: action.payload
            }
        case "ADD_CART":
            return {
                ...state,
                cart: [action.payload, ...state.cart],
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            };
        default:
            return state;

    }


};

export default products;
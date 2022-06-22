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
                cart: [...state.cart, action.payload],
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            };
        case "REMOVE_ITEM":
            state.cart.splice(action.payload, 1)
            return {
                ...state,
                cart: [...state.cart]
            }
                
        default:
            return state;

    }


};

export default products;
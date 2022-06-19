const products = (state, action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            console.log(action.payload)
            return {
                ...state,
                allProducts: action.payload
            }
        default:
            return state;
    }
};
export default products;
const products = (state, action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return {
                ...state,
                allProducts: action.payload
            }
        case "ADD_CART":
            action.payload.amount = 1;
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
            };
        case "UPDATE__AMOUNT":
            state.cart[action.payload.i].amount = action.payload.amount
            return {
                ...state,
                cart: [...state.cart]

            }
        case "SEARCH_BAR":
            return {
                ...state,
                allProducts: action.payload
            }
        case "SHOW_BY_PRICE":
            let prices
            if (action.direction === "asc") {
                prices = state.allProducts.sort((a, b) => (a.price > b.price) ? 1 : -1)
            } else {
                prices = state.allProducts.sort((a, b) => (a.price > b.price) ? -1 : 1)
            }

            return {
                ...state,
                allProducts: prices
            }
        case "FILTER_PRODUCTS":
            return {
                ...state,
                allProducts: action.payload
            }
        default:
            return state;
    }
};

export default products;
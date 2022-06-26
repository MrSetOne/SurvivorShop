const categories = (state, action) => {
    switch (action.type) {
        case "GET_ALL_CATEGORIES":
            return {
                ...state,
                allCategories: action.payload
            }
        default:
            return state;
    }
};

export default categories;
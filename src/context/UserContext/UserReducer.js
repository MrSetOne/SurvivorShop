const users = (state, action) => {

    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            };

        case "SIGNUP":
            return {
                ...state,
                message: action.payload.message,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                token: null
            };
        default:
            return state;
    }
};

export default users;
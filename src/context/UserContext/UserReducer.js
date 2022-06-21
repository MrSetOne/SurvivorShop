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
        case "UPDATE_USER":
            return {
                ...state,
                user: {...action.payload.userUpdated }
            }
        default:
            return state;
    }
};

export default users;
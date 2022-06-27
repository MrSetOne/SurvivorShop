const users = (state, action) => {

    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                username: action.payload.user.username
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
                token: null,
                username: null
            };
        case "UPDATE_USER":
            return {
                ...state,
                user: {...action.payload.userUpdated }
            };
        case "GET_USER":
            action.payload.Orders.sort((a, b) => (a.updatedAt > b.updatedAt) ? -1 : 1)
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
};

export default users;
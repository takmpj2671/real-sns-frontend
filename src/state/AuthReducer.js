const AuthReducer = (state, action) => { //React useReducerの仕様で、dispatchに渡したものが必ずReducerの第2引数（action）になる
    switch(action.type) {
        case "LOGIN_START" :
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case "LOGIN_SUCCESS" :
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
        case "LOGIN_ERROR" :
            return {
                user: null,
                isFetching: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default AuthReducer;
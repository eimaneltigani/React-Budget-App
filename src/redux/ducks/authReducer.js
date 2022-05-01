//Actions
const AUTH_USER_SET = 'AUTH_USER_SET';

//Action Creators
export const authUserSet = authUser => ({
    type: AUTH_USER_SET,
    authUser
});

//Initial State
const initialState = {
    authUser: 1,
    loading: true
};

//Reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER_SET:
            return {
                ...state,
                authUser: action.authUser
            };
        default:
            return state;
    }
}

export default authReducer;
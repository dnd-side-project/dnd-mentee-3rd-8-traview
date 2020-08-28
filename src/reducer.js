export const initialState = {
    user: null,
    term: null,
};

export const actionTypes = {
    SET_USER: 'SET_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    SET_SERACH_TERM: 'SET_SERACH_TERM',
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                user: null,
            };
        case actionTypes.SET_SERACH_TERM:
            return {
                ...state,
                term: action.term,
            };
        default:
            return state;
    }
};

export default reducer;

import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from "../actions/asyncActions";

//initial state for userState
const initialState = {
    fetching: false,
    token: null,
    error: null,
    logged: false
}


export const userReducer = (state= initialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null,
                token: null,
                logged: false
            }
        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: null,
                token: action.payload.token,
                logged: true
            }   
        case API_CALL_FAILURE:
        return {
            ...state,
            fetching: false,
            error: action.payload.error,
            token: null,
            logged: false
        }   
        default:
            return state;
    }
}
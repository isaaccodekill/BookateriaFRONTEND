import * as actions from '../Actions/bookRequests/bookRequestVars'

const initialState = {
    requests: [],
    error: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.GET_REQUESTS:
            return {
                ...state,
                requests:  [...action.payload] 
            }
        case actions.POST_REQUESTS:
            return {
                ...state,
                requests: [...state.requests, action.payload]
            } 
        case actions.REQ_ERR:
            return {
                ...state,
                requests: [...state.requests],
                error: action.payload
            }       
        default:
            return state
    }
}
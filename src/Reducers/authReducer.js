import * as authActions from '../Actions/authentication/authActionVariables'

const inititalState = {
    authState: localStorage.getItem("BookateriaAuthToken") === null ? false : true,
    error: ''
}

const authReducer = (state = inititalState, action) => {
    switch(action.type){
        case(authActions.LOGIN):
            return {
                authState: true
            }
        case(authActions.LOGOUT):
            return {
                authState: false
            }
        case(authActions.SET_ERROR):
            return {
                ...state,
                error: action.payload
            }
        case(authActions.CLEAR):
            return {
                ...state,
                error: ''
            }             
        default:
            return state
    }   
}

export default authReducer
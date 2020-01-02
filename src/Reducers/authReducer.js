import * as authActions from '../Actions/authentication/authActionVariables'

const inititalState = {
    authState: false
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
        default:
            return state
    }   
}

export default authReducer
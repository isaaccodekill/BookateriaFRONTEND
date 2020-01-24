import * as authActions from './authActionVariables'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import axios from 'axios'

const login = (token) => {
    localStorage.setItem("BookateriaAuthToken", token)
    return {
        type: authActions.LOGIN
    }
}

export const logout = () => {
    localStorage.removeItem("BookateriaAuthToken")
    return {
        type: authActions.LOGOUT
    }
}

const authFailure = (message) => {
    return {
        type: authActions.SET_ERROR,
        payload: message
    }
}

export const clearAuthError = () => {
    return {
        type: authActions.CLEAR
    }
}

export const loginAsync = (body) => async (dispatch) => {
    try{
        dispatch(showLoading())
        const result = await axios.post('https://api.bookateria.net/users/login/', body, {
            "Content-Type": "application/json"
        })
        console.log("the result", result)
        // dispatch(login(token))
        dispatch(hideLoading())

    }catch(error){
        console.log(JSON.stringify(error, undefined, 2))
        dispatch(hideLoading())
        // dispatch(authFailure())
    }
}


export const registerAsync = (body) => async (dispatch) => {
    try{
        dispatch(showLoading())
        const result = await axios.post('https://api.bookateria.net/users/register/', body, {
            "Content-Type": "application/json"
        })
        console.log(result)
        // dispatch(login(token))
        dispatch(hideLoading())

    }catch(error){
        dispatch(authFailure(error))
    }
}







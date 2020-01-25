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
        if(error.response){
            dispatch(authFailure(error.response.data.message[0]))
        }else{
            dispatch(authFailure(error.message))
        }
        dispatch(hideLoading())
    }
}


export const registerAsync = (body) => async (dispatch) => {
    console.log(body)
    try{
        dispatch(showLoading())
        const result = await axios.post('https://api.bookateria.net/users/register/', body, {
            "Content-Type": "application/json"
        })
        console.log("auth result",result)
        // dispatch(login(token))
        dispatch(hideLoading())

    }catch(error){
        if(error.response){
            const arr = Object.keys(error.response.data)
            dispatch(authFailure(error.response.data[arr[0]][0]))
        }else{
            dispatch(authFailure(error.message))
        }
        dispatch(hideLoading())
    }
}







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


export const loginAsync = (body) => async (dispatch) => {
    
    try{
        dispatch(showLoading())
        const result = await axios.post('https://api.bookateria.net/users/login/', {
            'Content-type': 'application/json',
            body,
        })
        console.log(result)
        // dispatch(login(token))
        dispatch(hideLoading())

    }catch(error){

    }
}


export const registerAsync = (body) => async (dispatch) => {
    try{
        dispatch(showLoading())
        const result = await axios.post('https://api.bookateria.net/users/register/', {
            'Content-type': 'application/json',
            body
        })
        console.log(result)
        // dispatch(login(token))
        dispatch(hideLoading())

    }catch(error){
        
    }
}







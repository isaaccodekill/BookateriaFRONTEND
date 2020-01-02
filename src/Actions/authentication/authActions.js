import * as authActions from './authActionVariables'

export const login = (token) => {
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
import React, { createContext, useState } from 'react'
export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {
	let authInitial = false
	const Token = localStorage.getItem("BookateriaAuthToken")
	if (Token){
		authInitial = true
		console.log(authInitial)
	}
	const [authed, setAuth] = useState(authInitial)
	const authenticate = (token) => {
		localStorage.setItem("BookateriaAuthToken", token)
		setAuth(true)
	}

	const logout = () => {
		localStorage.removeItem("BookateriaAuthToken")
		setAuth(false)
	}

	return (
		<AuthContext.Provider value={[authed, authenticate, logout]}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
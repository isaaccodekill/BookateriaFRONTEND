import React, { createContext, useState } from 'react'
export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {
	const [authed, setAuth] = useState(false)
	return (
		<AuthContext.Provider value={[authed, setAuth]}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
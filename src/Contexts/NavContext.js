import React, { useState, createContext } from 'react'

export const NavContext = createContext()

const NavContextProvider = ({ children }) => {
	const [navOpen, setNavOpen] = useState(null)
	return (
		<NavContext.Provider value={{navOpen, setNavOpen}}>
			{children}
		</NavContext.Provider>
	)
}

export default NavContextProvider
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavItems.module.css'

const NavItem = ({ background, path, label  }) => {
		const color = background ? "#fff" : '#001830'
		return (
			<NavLink to={`/${path}`}>
				<span className={styles.Link} style={{color: color}}>
					{label}
				</span>
			</NavLink>
		)
}

export default NavItem
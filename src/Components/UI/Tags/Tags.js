import React from 'react'
import styles from './Tags.module.css'
import { NavLink } from 'react-router-dom'

const Tags = ({ name }) => {
	return (
		<NavLink to={`library/${name}`}>
			<div className={styles.Tag}>
				{name}
			</div>
		</NavLink>
	)
}

export default Tags
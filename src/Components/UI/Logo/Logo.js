import React from 'react'
import { ReactComponent as LogoImage } from '../../../assets/images/bookateria.svg'
import styles from './Logo.module.css'
import {NavLink} from 'react-router-dom'

// style for the Logo Component
const Logo  = () => (
	<NavLink to="/">
		<div className={styles.Logo}>
		<LogoImage/>
		<h1 className={styles.h1}>
			Bookateria
			</h1>
		</div>
	</NavLink>
)

export default Logo
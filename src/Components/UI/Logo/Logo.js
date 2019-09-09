import React from 'react'
import { ReactComponent as LogoImage } from '../../../assets/images/bookateria.svg'
import styles from './Logo.module.css'

// style for the Logo Component
const Logo  = () => (
	<div className={styles.Logo}>
	<LogoImage/>
	<h1 className={styles.h1}>
		Bookateria
	</h1>
	</div>
)

export default Logo
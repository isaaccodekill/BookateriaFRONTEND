import React from 'react'
import { ReactComponent as NoImage } from '../../../assets/images/Group 24.svg'
import styles from './Defaultimage.module.css'

const Defaultimage = () => {
	return (
		<div className={styles.NoImage}>
			<NoImage/>
		</div>
	)
}

export default Defaultimage
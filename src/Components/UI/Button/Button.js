import React from 'react'
import styles from './Button.module.css'

const Button  = ({ bigSize, backgroundColor, color, Text, Icon, action }) => {
	const btnClasses = bigSize ? [styles.Btn, styles.BtnBig] : [styles.Btn, styles.BtnSmall]  	
	return (
		<div onClick={action}
				className={btnClasses.join(' ')} 
				style={{color: color,
				backgroundColor: backgroundColor}}	>
			{Icon}
			{Text}
		</div>
	)
}

export default Button
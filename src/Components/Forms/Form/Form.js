import React from 'react'
import styles from './Form.module.css'


const Form = ( { Heading,  configuration, buttonConfig } ) => {
	return (
		<div className={styles.Form}>
			<h2 className={styles.formHeading}>{Heading}</h2>
			<form >
				
				<input type="submit" className={styles.formSubmit} style={buttonConfig}/>		
			</form>
		</div>
	)
}

export default Form
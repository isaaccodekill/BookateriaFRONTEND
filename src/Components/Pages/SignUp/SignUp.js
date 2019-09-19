import React from 'react'
import styles from './SignUp.module.css'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import Form from '../../Forms/Form/Form'

const SignUp = () => {
	return (
		<div className={styles.SignUp}>
			<TopHeader/>
			<SubHeader background button={true}/>
			<Form Heading="Sign Up" buttonConfig={{color: "#fff", backgroundColor: "#00386e"}}/>
		</div>
	)
}

export default SignUp
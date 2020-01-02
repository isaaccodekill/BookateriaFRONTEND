import React from 'react'
import styles from './SignUp.module.css'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import Form from '../../Forms/Form/Form'
import PageLayout from '../../PageLayout/PageLayout'
import { authActions } from '../../../Actions/index'

const SignUp = () => {

	const configObject = {	
		email: {
			elementType: "input",
			elementConfig: {
				placeholder: "Email Address",
				type: 'email'
			},
			value: "",
			valid: true,
			validations: {
				required: true,
				maxCharLength: 256
			},
			errorMessages: []
		},
		username: {
			elementType: "input",
			elementConfig: {
				placeholder: "Username",
				type: 'text'
			},
			value: "",
			valid: true,
			validations: {
				required: true,
				maxCharLength: 256
			},
			errorMessages: []
		},
		password: {
			elementType: "input",
			elementConfig: {
				placeholder: "Password",
				type: 'password'
			},
			value: "",
			valid: true,
			validations: {
				required: true,
				maxCharLength: 256,
				minLength: 8
			},
			errorMessages: []
		},
		confirmPassword: {
			elementType: "input",
			elementConfig: {
				placeholder: "Confirm Password",
				type: 'password'
			},
			value: "",
			valid: true,
			validations: {
				required: true,
				confirmPassword: true,
				maxCharLength: 256,
				minLength: 8
			},
			errorMessages: []
		}
	}

	const buttonConfig = {
		text: "Create Account",
		style: {  
			backgroundColor: "#00386e",
			color: "#fff"
		}
	}

	const apiConfig = {
		url: "https://api.bookateria.net/users/register/",
		action: authActions.login,
		target: "Token" 
	}


	return (
		<PageLayout background showButton>
			<div className={styles.SignUp}>
				<Form Heading="Sign Up" configuration={configObject} buttonConfig={buttonConfig} apiConfig={apiConfig}/>
			</div>
		</PageLayout>
	)
}

export default SignUp
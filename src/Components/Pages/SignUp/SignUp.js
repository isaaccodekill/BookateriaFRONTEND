import React from 'react'
import styles from './SignUp.module.css'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import Form from '../../Forms/Form/Form'

const SignUp = () => {

	const configObject = {
		firstname: {
			elementType: "input",
			elementConfig: {
				placeholder: "First Name",
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
		lastname: {
			elementType: "input",
			elementConfig: {
				placeholder: "Last Name",
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


	return (
		<div className={styles.SignUp}>
			<TopHeader/>
			<SubHeader background button={true}/>
			<Form Heading="Sign Up" configuration={configObject} buttonConfig={buttonConfig}/>
		</div>
	)
}

export default SignUp
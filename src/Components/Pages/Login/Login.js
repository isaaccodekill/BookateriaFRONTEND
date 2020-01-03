import React from 'react'
import Form from '../../Forms/Form/Form'
import PageLayout from '../../PageLayout/PageLayout'
import { authActions } from '../../../Actions'


const Login = () => {
	const configObject = {
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
				maxCharLength: 256
			},
			errorMessages: []
		}
	}

	const buttonConfig = {
		text: "Sign In",
		style: {  
			backgroundColor: "#00386e",
			color: "#fff"
		}
	}

	const apiConfig = {
		url: "https://api.bookateria.net/users/login/",
		target: "Token",
		watch: 'status',
		expectedResult: true
	}

	return (
		<PageLayout background showButton specialCase>
			<Form Heading="Sign in" configuration={configObject} buttonConfig={buttonConfig}/>	
		</PageLayout>
	)
}

export default Login
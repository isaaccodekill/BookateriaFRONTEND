import React from 'react'
// import styles from ''
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import Form from '../../Forms/Form/Form'


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
		passwordr: {
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

	return (
		<div>
			<TopHeader/>
			<SubHeader background showButton={true} specialCase/>
			<Form Heading="Sign in" configuration={configObject} buttonConfig={buttonConfig}/>	
		</div>
	)
}

export default Login
import React, { useEffect, useContext } from 'react'
import styles from './SignUp.module.css'
import Form from '../../Forms/Form/Form'
import PageLayout from '../../PageLayout/PageLayout'
import { authActions } from '../../../Actions/index'
import { useSelector } from 'react-redux'
import { NotificationContext } from '../../../Contexts/NotificationContext'

const SignUp = () => {

	const authState = useSelector(state => state.auth)
	const [ setError ] = useContext(NotificationContext)

	useEffect(() => {
		if(authState.error){
			setError(authState.error, authActions.clearNotifications)
		}
	}, [authState.error])

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



	return (
		<PageLayout background showButton>
			<div className={styles.SignUp}>
				<Form Heading="Sign Up" configuration={configObject} buttonConfig={buttonConfig} apiConfig={authActions.registerAsync}/>
			</div>
		</PageLayout>
	)
}

export default SignUp
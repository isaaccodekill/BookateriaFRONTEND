import React, {useEffect, useContext} from 'react'
import Form from '../../Forms/Form/Form'
import PageLayout from '../../PageLayout/PageLayout'
import { authActions } from '../../../Actions'
import { useSelector } from 'react-redux'
import { NotificationContext } from '../../../Contexts/NotificationContext'


const Login = () => {

	const authState = useSelector(state => state.auth)
	const [ show, setShow, setNotification, message, finalClearFunc ] = useContext(NotificationContext)

	useEffect(() => {
		if(authState.error){
			console.log("called set error from login")
			setNotification(authState.error, authActions.clearAuthError, true)
		}
	}, [authState.error])


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

	
	return (
		<PageLayout background showButton specialCase>
			<Form Heading="Sign in" configuration={configObject} buttonConfig={buttonConfig} action={authActions.loginAsync}/>	
		</PageLayout>
	)
}

export default Login
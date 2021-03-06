import React, {useState, useEffect, useContext} from 'react'
import Form from '../../Forms/Form/Form'
import PageLayout from '../../PageLayout/PageLayout'
import { authActions } from '../../../Actions'
import { useSelector, useDispatch } from 'react-redux'
import { NotificationContext } from '../../../Contexts/NotificationContext'
import { Redirect } from 'react-router'


const Login = () => {

	const dispatch = useDispatch()
	const authState = useSelector(state => state.auth)
	const [ show, setShow, setNotification, message, finalClearFunc ] = useContext(NotificationContext)
	const [mount, setMount] = useState(false)


	useEffect(() => {
		dispatch(authActions.clearAuthError())
		setMount(true)	
	}, [])

	useEffect(() => {  
		if(authState.error && mount){
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

	if(authState.authState){
		return (<Redirect to="/books"/>)
	}
	
	return (
		<PageLayout background showButton specialCase>
			<Form Heading="Sign in" configuration={configObject} buttonConfig={buttonConfig} action={authActions.loginAsync}/>	
		</PageLayout>
	)
}

export default Login
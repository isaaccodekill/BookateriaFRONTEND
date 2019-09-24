import React from 'react'
import styles from './SignUp.module.css'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import Form from '../../Forms/Form/Form'

const SignUp = () => {

	const configObject = {
		firstname: {
			elementType: "image",
			elementConfig: {
				// placeholder: "Add a cover photo",
				type: "file"	
			},
			previewUrl: "",
			value: "",
			valid: true,
			validations: {
				maxSize: "10mb",
				alloweFileType: ['jpeg', 'png', 'svg']
			},
			errorMessages: []
		},
		lastname: {
			elementType: "input",
			elementConfig: {
				placeholder: "Add a title",
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
		Author: {
			elementType: "input",
			elementConfig: {
				placeholder: "Add an Author",
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
		Category: {
			elementType: "input",
			elementConfig: {
				placeholder: "Add a Category",
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
		Description: {
			elementType: "textArea",
			elementConfig: {
				placeholder: "Add a Description",
				type: 'text'
			},
			value: "",
			valid: true,
			validations: {},
			errorMessages: []
		},
		bookFile: {
			elementType: "file",
			elementConfig: {
				placeholder: "Add the book file",
				type: "file"	
			},
			previewUrl: "",
			value: "", // need to find the way to make the name of the book show as i upload it
			valid: true,
			validations: {
				required: true,
				alloweFileType: ["pdf", "epub"]
			},
			errorMessages: []
		}
	}

	const buttonConfig = {
		text: "Upload Book",
		style: {  
			backgroundColor: "#4bce61",
			color: "#fff"
		}
	}


	return (
		<div className={styles.SignUp}>
			<TopHeader/>
			<SubHeader background button={true}/>
			{/*<Form Heading="Sign Up" buttonConfig={{color: "#fff", backgroundColor: "#00386e"}}/>*/}
		</div>
	)
}

export default SignUp
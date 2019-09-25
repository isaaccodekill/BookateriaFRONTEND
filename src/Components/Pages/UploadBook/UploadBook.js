import React from 'react'
import styles from './UploadBook.module.css'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import Form from '../../Forms/Form/Form'

const UploadBook = ( ) => {

	const configObject = {
		bookImage: {
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
		title: {
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
		<div>
			<TopHeader/>
			<SubHeader background showButton={true}/>
			<Form Heading="Upload a book" configuration={configObject} buttonConfig={buttonConfig} />
		</div>
	)
}

export default UploadBook

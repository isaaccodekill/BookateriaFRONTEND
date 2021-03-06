import React from 'react'
import Form from '../../Forms/Form/Form'
import PageLayout from '../../PageLayout/PageLayout'
import {documentActions} from "../../../Actions";
// import {  }

const UploadBook = ( ) => {

	const configObject = {
		image: {
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
				allowedFileType: ['image/jpeg', 'image/png', 'image/svg']
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
		author: {
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
		category: {
			elementType: "selectApi",
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
		description: {
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
		pdf: {
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
				allowedFileType: ["application/pdf", "application/epub", "application/epub+zip"]
			},
			errorMessages: []
		},
		all_tags: {
			value: [],
			elementType: "checkGroup",
			elementConfig: {
				placeholder: "Add a tag"
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
		<PageLayout background showButton>
			<Form Heading="Upload a book" configuration={configObject} buttonConfig={buttonConfig} action={documentActions.createDocumentAsync} />
		</PageLayout>
	)
}

export default UploadBook

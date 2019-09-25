import React from 'react'
import TopHeader from '../../UI/Headers/TopHeader/TopHeader'
import SubHeader from '../../UI/Headers/SubHeader/SubHeader'
import Form from '../../Forms/Form/Form'


const RequestPage = () => {
	const configObject = {
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
		}
	}

	const buttonConfig = {
		text: "Request Book",
		style: {  
			backgroundColor: "#00386e",
			color: "#fff"
		}
	}


	return (
		<div>
			<TopHeader/>
			<SubHeader background showButton={true}/>
			<Form Heading="Request a book" configuration={configObject} buttonConfig={buttonConfig} />
		</div>
	)
}

export default RequestPage
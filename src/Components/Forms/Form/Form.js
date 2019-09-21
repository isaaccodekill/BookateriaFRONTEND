import React, { useState } from 'react'
import styles from './Form.module.css'
import Input from '../Input/Input'

// this is an explanation on how the cofigData prop works in this form
// so the configuration prop should be an object, each of which has a unique key which will later become the name attribute on the input element it self
// now each key will refer to an object which contains things like value,  the element type, the element config( contains the placeholder and the type) , then the valid property which will determine if its valid to be submitted
// it will also contain the validation key which will refer to an objec of all the kind of validations that will be carried out
// and also an error message key which will contain all the error messages if it doesnt meet the validations

// note this component will also contain the validations seems (like i'll  have to learn that useEffect hook)
// then i will add a new url prop to where the data from this form will be sent
// if the  form isnt valid then it wont be able to submit 

// an example of the configurationsdata that will be passed as the configuration prop
// the example below is used in the upload a book page
// {
// 	bookImage: {
// 		elemenType: "image",
// 		elementConfig: {
// 			placeholder: "Add a cover photo",
// 			type: "file"	
// 		},
// 		previewUrl: "",
// 		value: "",
// 		valid: true,
// 		validations: {
// 			maxSize: "10mb",
// 			alloweFileType: ['jpeg', 'png', 'svg']
// 		},
// 		errorMessages: []
// 	},
// 	 : {
// 		elemenType: "input",
// 		elementConfig: {
// 			placeholder: "Add a title",
// 			type: 'text'
// 		}
// 		value: "",
// 		valid: true,
// 		validations: {
// 			required: true,
// 			maxCharLength: 256
// 		},
// 		errorMessages: []
// 	},
// 	Author: {
// 		elemenType: "input",
// 		elementConfig: {
// 			placeholder: "Add an Author",
// 			type: 'text'
// 		}
// 		value: "",
// 		valid: true,
// 		validations: {
// 			required: true,
// 			maxCharLength: 256
// 		},
// 		errorMessages: []
// 	},
// 	Category: {
// 		elemenType: "input",
// 		elementConfig: {
// 			placeholder: "Add a Category",
// 			type: 'text'
// 		}
// 		value: "",
// 		valid: true,
// 		validations: {
// 			required: true,
// 			maxCharLength: 256
// 		},
// 		errorMessages: []
// 	},
// 	Description: {
// 		elemenType: "textArea",
// 		elementConfig: {
// 			placeholder: "Add a Description",
// 			type: 'text'
// 		}
// 		value: "",
// 		valid: true,
// 		validations: {},
// 		errorMessages: []
// 	},
// 	bookFile: {
// 		elemenType: "file",
// 		elementConfig: {
// 			placeholder: "Add the book file",
// 			type: "file"	
// 		},
// 		previewUrl: "",
// 		value: "", // need to find the way to make the name of the book show as i upload it
// 		valid: true,
// 		validations: {
// 			required: true,
// 			allowedFileType: ["pdf", "epub"]
// 		},
// 		errorMessages: []
// 	}
// }


const Form = ( { Heading,  configuration, buttonConfig } ) => {

	const [detailsObject, setDetailsObject] = useState({})
	const [formValid, setFormValidity] = useState(true)

	// the function that make sure each value is set into the object as the values in the target element changes
	const setInputData = (e) => {
		console.log(e)
		// get which piece of the state it is and its current value
		const targetData = e.name
		const currentValue = e.target.value

		// immutalilty :)
		const updatedDetailsObject = {...detailsObject}
		const selectedPiece = {...updatedDetailsObject[targetData]}

		// properly spreading the innen config objects  and arrays 
		selectedPiece.elementConfig = {...updatedDetailsObject[targetData].elementConfig}
		selectedPiece.validations = { ...updatedDetailsObject[targetData].validations }
		selectedPiece.errorMessages = [...updatedDetailsObject[targetData].errorMessages] 

		// set the value 
		selectedPiece.value = currentValue
		updatedDetailsObject[targetData] = {...selectedPiece}
		setDetailsObject(updatedDetailsObject)

		// now that we have successfully updated the data we shall proceed to run the validations for the whole form
		runValidations(targetData) 
	}

	const runValidations = (data) => {
		// all this function is meant to do is to check the values of the data object and make sure they are up to standards of the validation props set
		// the data argument is the piece of the state we shall run validations on
		
		const updatedobject = {...detailsObject}
		const selectedPiece = { ...detailsObject[...data]}
		const validations = {...selectedPiece.validations}
		const errorMessages = [...selectedPiece.errorMessages]
		const value = selectedPiece.value

		// the list of the validations
		Object.keys(validations).forEach(validation => {
			if (validation === 'required'){
				if (value === ""){
					errorMessages.push("please fill this field") 
					setFormValidity(false)
				}
			}
			if (validation === 'maxLength'){
				if (value.length() > validations.maxLength){
					errorMessages.push(`This field must contain less than ${validations.maxLength} characters`) 
					setFormValidity(false)
				} 
			}
			if (validation === 'minLength'){
				if (value.length() < validations.minLength){
					errorMessages.push(`This field must contain more than ${validations.minLength} characters`)
					setFormValidity(false)
				} 
			}
			if (validation === "allowedFileType"){
				// find away to get he extension of the selected file 
			}
			
			// setting the new array of error message into the selected piece of state
			selectedPiece.errorMessages = [...errorMessages]
			updatedobject[data] = {...selectedPiece}
			setDetailsObject(updatedobject)
		})
	}

	const submitclasses = formValid ? [styles.formSubmit] : [styles.formSubmit, styles.disabled]
	Object.keys(configuration).map(configObject => setDetailsObject({...detailsObject, ...configObject})

	// creating a group of inputs based on the config objects
	const inputList = Object.keys(detailsObject).Map(key => (<Input name={key} Type={key.elementType} inputConfig={{...key.elementConfig}} value={key.value} onChange={() => setInputData(e)} errors={key.errorMessages} />))



	return (
		<div className={styles.Form}>
			<h2 className={styles.formHeading}>{Heading}</h2>
			<form onSumbit={'we submit the form'}>
				{inputList}				
				<input disabled={!formvalid} type="submit" className={styles.formSubmit} style={buttonConfig}/>		
			</form>
		</div>
	)
}

export default Form
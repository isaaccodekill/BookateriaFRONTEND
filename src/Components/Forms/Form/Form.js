import React, { useState, useEffect } from 'react'
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


const Form = ( { Heading,  configuration, buttonConfig, apiConfig } ) => {

	const [detailsObject, setDetailsObject] = useState(configuration)
	const [formValid, setFormValidity] = useState(null)

	// the function that make sure each value is set into the object as the values in the target element changes
	const setInputData = (e, valueParam) => {
		// get which piece of the state it is and its current value
		const targetData = e.target.name
		const currentValue = e.target.value
		const updatedDetailsObject = {...detailsObject}
		const selectedPiece = {...updatedDetailsObject[targetData]}

		// properly spreading the innen config objects  and arrays 
		selectedPiece.elementConfig = {...updatedDetailsObject[targetData].elementConfig}
		selectedPiece.validations = { ...updatedDetailsObject[targetData].validations }
		selectedPiece.errorMessages = [...updatedDetailsObject[targetData].errorMessages] 

		// set the value 
		if (valueParam){
			if (selectedPiece.elementType === "file"){
				console.log(e.target.files[0])
				selectedPiece.value = valueParam	
			}else{	
				selectedPiece.value = valueParam
			}	
		} else {
			if (selectedPiece.elementType === "file"){
				console.log(e.target.files[0])
				selectedPiece.value = e.target.files[0]	
			}else{	
				selectedPiece.value = currentValue
			}
		}

		updatedDetailsObject[targetData] = {...selectedPiece}
		setDetailsObject(updatedDetailsObject)

		// now that we have successfully updated the data we shall proceed to run the validations for the whole form
		// runValidations(targetData) 
	}

	const runValidations = (data) => {
		// all this function is meant to do is to check the values of the data object and make sure they are up to standards of the validation props set
		// the data argument is the piece of the state we shall run validations on
		
		const updatedobject = {...detailsObject}
		const selectedPiece = { ...detailsObject[data]}
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
				if (value.length > validations.maxLength){
					errorMessages.push(`This field must contain less than ${validations.maxLength} characters`) 
					setFormValidity(false)
				} 
			}
			if (validation === 'minLength'){
				if (value.length < validations.minLength){
					errorMessages.push(`This field must contain more than ${validations.minLength} characters`)
					setFormValidity(false)
				} 
			}
			if (validation === 'confirmPassword'){
				if (value !== detailsObject["password"].value){
					errorMessages.push('Passwords do not match')
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

	const finalValidations = (detailsObject) => {
		const formValidity = true
		const copyObject = { ...detailsObject }

		// get the error messages array of all the keys of the object
		const keys = Object.keys(copyObject)
		keys.forEach(key => {
			copyObject[key].errorMessages = [...detailsObject[key].errorMessages]
		})

		keys(copyObject).forEach(key => {
			const formValidity = runValidations('data', null, 'copyObject')
		})

	}

	const imageUploader = async (e) => {
		console.log("This better work")
		const cloudinary_url = "https://api.cloudinary.com/v1_1/isaaccloud"
		const preset = "y2pm46hq"

		const fileReceived = e.target.files[0]
		const formData = new FormData()

		formData.append("image", fileReceived)
		formData.append("upload_preset", preset)


		// get the file (done)
		fetch( cloudinary_url, {
			method: "post",
			headers: {
				'Content-type': 'application/x-www-form-urlencoded'
			},
			body: formData 
		})
		.then(response => {
			console.log(response)
			// setInputData(e, 7)
		})
		.catch(error => {
			console.log(error)
		})
		// send the file to th cloudinary
		// get the url from the response
		// save the url and the value in the file input
		// make sure the the image shows , make the neccessary adjustments for the for the url and saet the url as the source of the image
	}

	const submitclasses = formValid ? [styles.formSubmit] : [styles.formSubmit, styles.disabled]
	let updatingObjext = {}
	// Object.keys(configuration).forEach(configObject => {
	// 	updatingObjext = {...updatingObjext, configObject}
	// })
	// useEffect(() => setDetailsObject(configuration), [])
	// creating a group of inputs based on the config objects
	const inputList = Object.keys(detailsObject).map(key => {
				if(key === "bookImage"){
					return (
						<Input name={key} Type={detailsObject[key].elementType} 
							inputConfig={{...detailsObject[key].elementConfig}} value={detailsObject[key].value} action={imageUploader}
							errors={detailsObject[key].errorMessages} />		
					)	
				}
				return (<Input name={key} Type={detailsObject[key].elementType} 
				inputConfig={{...detailsObject[key].elementConfig}} value={detailsObject[key].value} action={setInputData}
				errors={detailsObject[key].errorMessages} />)})
	
	
	const submitForm = (e) => {
		e.preventDefault()
	}			



	return ( 
	 <div className={styles.Form}>
			<h1 className={styles.formHeading}>{Heading}</h1>
			<form onSubmit={'submitForm'}>
				{inputList}				
				<input disabled={!formValid} type="submit" className={styles.formSubmit} style={buttonConfig.style} value={buttonConfig.text} />		
			</form>
		</div>
	)
}

export default Form
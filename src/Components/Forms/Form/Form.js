import React, { useState } from 'react'
import styles from './Form.module.css'
import Input from '../Input/Input'
import { useDispatch } from 'react-redux'




const Token = localStorage.getItem("BookateriaAuthToken")



const Form = ( { Heading,  configuration, buttonConfig, action } ) => {
	const [detailsObject, setDetailsObject] = useState(configuration)
	const [formValid, setFormValidity] = useState(true)
	const dispatch = useDispatch()
	// the function that make sure each value is set into the object as the values in the target element changes

	const runValidations = (data, startObj) => {
		// all this function is meant to do is to check the values of the data object and make sure they are up to standards of the validation props set
		// the data argument is the piece of the state we shall run validations on
		let validity = true
		const updatedobject = {...startObj}
		const selectedPiece = { ...startObj[data]}
		const validations = {...selectedPiece.validations}
		const errorMessages = []
		const value = selectedPiece.value

		// the list of the validations
		Object.keys(validations).forEach(validation => {
			if (validation === 'required'){
				if (value === ""){
					errorMessages.push("please fill this field") 
					// setFormValidity(false)
					validity  = false
				}
			}
			if (validation === 'maxLength'){
				if (value.length > validations.maxLength){
					errorMessages.push(`This field must contain less than ${validations.maxLength} characters`) 
					// setFormValidity(false)
					validity  = false

				} 
			}
			if (validation === 'minLength'){
				if (value.length < validations.minLength){
					errorMessages.push(`This field must contain more than ${validations.minLength} characters`)
					// setFormValidity(false)
					validity  = false

				} 
			}
			if (validation === 'confirmPassword'){
				if (value !== detailsObject["password"].value){
					errorMessages.push('Passwords do not match')
					// setFormValidity(false)
					validity  = false

				}
			}
			if (validation === "allowedFileType"){
				if(value){
					let valid = false
					for(let i = 0; i < selectedPiece.validations.allowedFileType.length; i++ ){
						if(value.type === selectedPiece.validations.allowedFileType[i]){
							valid = true
							break
						}
					}

					if(!valid){
						errorMessages.push("File must be an image")
						validity = false
					}
				}
				// find away to get he extension of the selected file 
			}
		})
		// setting the new array of error message into the selected piece of state
		selectedPiece.errorMessages = [...errorMessages]
		updatedobject[data] = {...selectedPiece}
		setDetailsObject(updatedobject)
		return validity
	}

	const finalValidations = () => {
		let formValidity = true

		const keys = Object.keys(detailsObject)
		for(let i = 0; i < keys.length; i++){
			formValidity = runValidations(keys[i], detailsObject)
			if (!formValidity){
				break
			}
		}
		return formValidity
	}

	const setInputData = (e, valueParam, name) => {

		// get which piece of the state it is and its current value
		const targetData = name ? name : e.target.name
		// const currentValue =  e.target.value
		const updatedDetailsObject = {...detailsObject}
		const selectedPiece = {...updatedDetailsObject[targetData]}

		

		// properly spreading the inner config objects  and arrays 
		selectedPiece.elementConfig = {...updatedDetailsObject[targetData].elementConfig}
		selectedPiece.validations = { ...updatedDetailsObject[targetData].validations }
		selectedPiece.errorMessages = [...updatedDetailsObject[targetData].errorMessages] 

		// set the value 
		if (valueParam){
			if (selectedPiece.elementType === "file"){
				selectedPiece.value = valueParam	
			}else{	
				selectedPiece.value = valueParam
			}	
		} else {
			if (selectedPiece.elementType === "file"){
				console.log("file", e.target.files[0])
				selectedPiece.value = e.target.files[0]	
			}else{	
				selectedPiece.value = e ? e.target.value : valueParam
			}
		}
		updatedDetailsObject[targetData] = {...selectedPiece}
		// setDetailsObject(updatedDetailsObject)
		runValidations(targetData, updatedDetailsObject)


		// now that we have successfully updated the data we shall proceed to run the validations for the whole form
		// runValidations(targetData) 
	}

	const inputList = Object.keys(detailsObject).map(key => {
				if(key === "bookImage"){
					return (
						<Input name={key} Type={detailsObject[key].elementType} 
							inputConfig={{...detailsObject[key].elementConfig}} value={detailsObject[key].value} action={setInputData }
							errors={detailsObject[key].errorMessages} />		
					)	
				}
				return (<Input name={key} Type={detailsObject[key].elementType} 
				inputConfig={{...detailsObject[key].elementConfig}} value={detailsObject[key].value} action={setInputData}
				errors={detailsObject[key].errorMessages} />)})
	
	
	const submitForm = (e) => {
		e.preventDefault()
		const me = finalValidations()
		if(me === true){
			let requiredObject = Object.keys(detailsObject).reduce((acc, current) => {
				if(current !== "confirmPassword"){
					acc[current] = detailsObject[current].value
				}
				return acc
			}, {})
			
			submitHelper(requiredObject)			
		}
	}
	
	async function submitHelper(body){
			console.log("forms body", body)
			dispatch(action(body))
	}



	return ( 
	 <div className={styles.Form}>
			<h1 className={styles.formHeading}>{Heading}</h1>
			<form onSubmit={submitForm}>
				{inputList}				
				<input disabled={!formValid} type="submit" className={styles.formSubmit} style={buttonConfig.style} value={buttonConfig.text} />		
			</form>
		</div>
	)
}

export default Form
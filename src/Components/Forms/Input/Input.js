import React, {useState, useEffect, useRef} from 'react'
import styles from './Input.module.css'
// import { ReactComponent as AddImage } from '../../../assets/images/Union 44.svg'
import { ReactComponent as Upload } from '../../../assets/images/upload.svg'

import multipleEvents from '../../../Helpers/multipleEventListener'
import { ReactComponent as Close} from '../../../assets/images/close.svg'
import ApiDropDown from '../../APiDropDown/ApiDropDown'


const Input = ({ name, Type, inputConfig, value, errors, action}) => {
	let imageClassList = [styles.imageupload]
	const [activeImage, setActiveImage] = useState(false)
	const boxRef = useRef()
	const imageInputRef = useRef()
	const [imgUrl, setImgUrl] = useState(null)
	const labelClasses =  imgUrl ? [styles.boxImage, styles.noPointers] : [styles.boxImage]

	

	useEffect(() => {
		if(Type === "image"){
			multipleEvents(boxRef.current, ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"], (e) => {
				e.preventDefault();
			})
			multipleEvents(boxRef.current, ["dragover", "dragenter"], (e) => {
				// console.log(e)
				if(!boxRef.current.classList.contains(styles.showDrag)){
					boxRef.current.classList.add(styles.showDrag)
				}
			})
			multipleEvents(boxRef.current, ["dragleave", "drop", "dragend"], (e) => {
				if(boxRef.current.classList.contains(styles.showDrag)){
					boxRef.current.classList.remove(styles.showDrag)
				}
			})
			multipleEvents(boxRef.current, ["drop"], (e) => {
				// console.log(e.dataTransfer.files[0])
				imageInputRef.current.files = e.dataTransfer.files
				setImgUrl(URL.createObjectURL(e.dataTransfer.files[0]))
			})

			imageInputRef.current.addEventListener("onchange", (e) => {
				// imageInputRef.current.files = e.dataTransfer.files
				setImgUrl(URL.createObjectURL(e.dataTransfer.files[0]))
			})
		}
	}, [])

	const imageChangeFunction = (e) => {
		if(e.currentTarget.files.length > 0){
			setImgUrl(URL.createObjectURL(e.target.files[0]))
		}
		action(e, e.target.files[0])				
	}

	const removeImageFunction = (e) => {
		e.preventDefault()
		setImgUrl()
		action(null, null,  name)
		return false
	}


	let input = null
	switch(Type){
		case("checkGroup"):
			input = (<React.Fragment>
					
			</React.Fragment>)
			break
		case("input"):
			input = (<React.Fragment>
						<p className={styles.Label}>{inputConfig.placeholder}</p>
						<input id={name} name={name} className={styles.inputNormal} type={inputConfig.type} value={value} onChange={(e) =>  action(e)} />

					</React.Fragment>)
			break
		case("selectApi"):
				input = (<ApiDropDown value={value} inputConfig={inputConfig} setValueFunction={action} errorMessages={errors} />) 
				break; 
		case("textArea"):
			input = (
				<React.Fragment>
						<label htmlFor={name} className={styles.InputGroup}>
							<p className={styles.Label}>{inputConfig.placeholder}</p>
							<textarea id={name} name={name}  className={styles.textArea} value={value} onChange={(e) => action(e)}/>
						</label>
					</React.Fragment>)
			break	
		case("image"):	
			input = (
						<label htmlFor={name} className={labelClasses.join(' ')}>
							<div ref={boxRef} className={imageClassList.join(' ')}>
							<input ref={imageInputRef} id={name} name={name}  className={styles.imageInput} type="file" accept="image/*" onChange={imageChangeFunction}/>
							<div className={styles.dragClickText}>
								<Upload/>	 
								<h3>Click Or Drag Image Here</h3>
							</div>
							{ imgUrl ? <React.Fragment>
								<div className={styles.cancelDiv} onClick={removeImageFunction}> <Close/> </div>
								<div className={styles.imagePreviewSection}>
									<img src={imgUrl} className={styles.imageContent}/>
								</div>
							</React.Fragment>: null }
						</div>
						</label>
				)
			break
		case("file"):
			input = (
					<React.Fragment>
						<label htmlFor={name} className={styles.InputGroup}>
							<p className={styles.Label}>{inputConfig.placeholder}</p>
							<input id={name} name={name} className={styles.fileInput} type="file" filename={value} onChange={(e) => action(e)} placeholder="select file" />
							<div className={styles.dummy}> {value ? value.name.length < 20 ? value.name : value.name.substring(0, 20) + "..." : "Upload book"}</div>
						</label>
					</React.Fragment>) 
			break
	}
	return (
		<div className={styles.InputGroup}>
			{input}
			{(errors.length > 0 && Type !== 'selectApi' ) ? <p className={styles.errorMessage}>
			 			{errors[0]} 
			</p> : <p className={styles.null}>no errors</p> }
		</div>
	)
}

export default Input
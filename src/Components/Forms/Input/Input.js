import React from 'react'
import styles from './Input.module.css'
import { ReactComponent as AddImage } from '../../../assets/images/Union 44.svg'

const Input = ({ label, inputConfig,  action , value, erorrs}) => {
	let input = null
	Switch(inputConfig.type){
		case("input"):
			input = (<input className={styles.inputNormal} type={inputConfig.textType} value={value} onChange={action} />)
		case("textArea"):
			input = (<textArea className={styles.textArea} value={value} onChange={action}/>)	
		case("image"):	
			input = (	<div className="imageupload">
							<input className={styles.imageInput} type="file" accept="image/*"  onChange={action}/>
							<div className="drag-click-text">
								<AddImage/>	
								<h3>Click Or Drag Image Here</h3>
							</div>
							<div className="image-previewSection">
								<img src="#" alt="uploaded image" className="imageContent"/>
							</div>
						</div>
					)
		case("file"):
			input = (<input className={styles.fileInput} type="file" value={value} onChange={action} placeholder="select file" />) 		
	}
	return (
		<div classname={styles.InputGroup}>
			<p className={syles.label}>{label}</p>
				{input}
			{erorrs[0] ? <p className={styles.errorMessage}
			 {erorrs[0]} 
			</p> : null }
		</div>
	)
}

export default Input
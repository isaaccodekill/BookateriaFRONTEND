import React from 'react'
import styles from './Input.module.css'
import { ReactComponent as AddImage } from '../../../assets/images/Union 44.svg'


const Input = ({ name, Type, inputConfig, value, erorrs, action}) => {
	let input = null
	switch(Type){
		case("input"):
			input = (<React.Fragment>
						<label htmlFor={name} className={styles.InputGroup}>
							<p className={styles.Label}>{inputConfig.placeholder}</p>
							<input id={name} name={name} className={styles.inputNormal} type={inputConfig.textType} value={value} onChange={(e) => action(e)} />
						</label>
					</React.Fragment>)
			break
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
						<label htmlFor={name}>
							<div className={styles.imageupload}>
							<input id={name} name={name}  className={styles.imageInput} type="file" accept="image/*"  onChange={(e) => action(e)}/>
							<div className={styles.dragClickText}>
								<AddImage/>	 
								<h3>Click Or Drag Image Here</h3>
							</div>
							{ value ? <React.Fragment>
								<div className={styles.cancelDiv}>x</div>
								<div className={styles.imagePreviewSection}>
									<img src="#" className={styles.imageContent}/>
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
			{erorrs ? <p className={styles.errorMessage}>
			 			{erorrs[0]} 
			</p> : null }
		</div>
	)
}

export default Input
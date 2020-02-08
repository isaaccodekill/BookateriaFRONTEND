import React, { useState } from 'react'
import styles from './CheckBoxGroup.module.css'
import CheckInput from "../CheckInput/CheckInput";

const CheckBoxGroup = ({value, SetValueFunc, inputConfig}) => {
    const [textContent, setTextContent] = useState('')




    function addAdditionalTag(e){
        e.preventDefault()
        if(textContent){
            SetValueFunc(null, [ ...value, textContent ], "all_tags")
            setTextContent('')
        }
    }

    function deleteAdditional(e, text){
        if(!e.target.checked){
            SetValueFunc(null, [...value].filter(i => i !== text ), "all_tags")
        }
    }

    return (
        <div className={styles.checkGroup}>
            <p className={styles.Label}>{inputConfig.placeholder}</p>
            {value.map(val => (<CheckInput text={val} changeFunc={deleteAdditional}/>))}
            <div className={styles.inputGroup}>
                <input maxLength={20} className={styles.input} type="text" value={textContent} onChange={(e) => setTextContent(e.target.value) } />
                <button onClick={addAdditionalTag} type="submit" className={styles.button}>ADD</button>
            </div>
		</div>
    )
}

export default CheckBoxGroup

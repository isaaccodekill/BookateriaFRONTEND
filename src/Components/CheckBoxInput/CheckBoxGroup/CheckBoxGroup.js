import React, { useState } from 'react'
import styles from './CheckBoxGroup.module.css'

const CheckBoxGroup = ({value, SetInputFunc, inputConfig}) => {
    const [ showInput, setShowInput ] = useState(false)
    const [ additonalTags, setShowAdditionalTags ] = useState([])
    

    function checkChange(){
           
    }

    function deleteAdditional(){

    }

    return (
        <div className={styles.checkgroup}>
            <p className={styles.Label}>{inputConfig.placeholder}</p>
            { value.map(val => {
                if(!additonalTags.includes(val)){
                    return (<CheckInput text={val} changeFunc={}/>)
                }
            }) }
            {/* from the default items in the group we give a check input and the function to remove them from the state */}

            <span className={additionalTags}> Add a tag </span>
            <input type="text"/>
            {/* a new input that's styled to add additonal tags these tags are then sent to the   */}
		</div>
    )
}

export default CheckBoxGroup

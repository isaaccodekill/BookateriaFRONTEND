import React from 'react'
import styles from './CheckInput.module.css'

const CheckInput = ({ text, changeFunc, ...props }) => {
    return (
        <div className={styles.checkInput} {...props}>
            <input checked={true} onChange={(e) => changeFunc(e, text)} type="checkbox" id="hidden" className={styles.hiddenInput}/>
            <label htmlFor="hidden" className={styles.InputGroup}>
                <div className={styles.fakeCheckbox}>
                    <div className={styles.checkInner}>
                    </div>
                </div>
                <span className={styles.checkText}> { text } </span>
            </label>
        </div>
    )
}

export default CheckInput

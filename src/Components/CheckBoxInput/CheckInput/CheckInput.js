import React from 'react'

const CheckInput = ({ text, changeFunc }) => {
    return (
        <div className={styles.CheckInput}>
            <input type="checkbox" id="hidden" className={styles.hiddenInput}/>
			<label htmlFor="hidden" className={styles.InputGroup}>
                <div className={styles.fakeCheckbox}>
                    <div className={styles.checkInner}>
                    </div>
                </div>
                <span>  </span>
            </label>
        </div>
    )
}

export default CheckInput

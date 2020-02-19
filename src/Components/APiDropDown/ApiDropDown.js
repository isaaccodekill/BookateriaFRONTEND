import React, { useState, useEffect, Fragment } from 'react'
import styles from './ApiDropDown.module.css'
import axios from 'axios'
import { ReactComponent as Dropdownsvg } from '../../assets/images/dropdown.svg'
import Loader from '../UI/Loader/Loader'

const ApiDropDown = ({value, setValueFunction, inputConfig, errorMessages}) => {
    const [ categories, setCategories ] = useState([])
    const [ internalErrors, setInternalErrors ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [showOptions, setshow ] = useState(false)

    useEffect(() => {
        (async function (){
            try {
                setLoading(true)
                const result = await axios.get("https://api.bookateria.net/documents/categories/")
                if(result){
                    setLoading(false)
                    setCategories([...result.data.results])
                }
            } catch (error) {
                setLoading(false)
                setInternalErrors("Catergories could not be retrieved")
                // set the notification state that triggers the component
            }
        }())
    }, [])

    function selectOption(e){
        setInternalErrors("")
        setValueFunction(null, e.target.textContent, "category")
        setshow(false)
    }

    function openFunc(){
        if(!loading && (showOptions === false)){
            setshow(true)
        }else{
            setshow(false)
        }
    }


    return (
        <Fragment>
            <div className={showOptions ? [styles.background, styles.activeBackground].join(' ') : styles.background } onClick={() => setshow(false)}></div>
            <div className={styles.selectInputGroup}>
                <p className={styles.Label}>Select a category</p>
                <div className={styles.selectedOption} onClick={openFunc}>
                    <span>{value || inputConfig.value}</span>
                    { loading ? <div style={{
                        position: 'absolute',
                        right: '20px',
                        top: '15px',
                        opacity: '1',
                        transition: 'all 0.3s ease',
                        height: '20px'}}> <Loader height="20px"/> </div> : <Dropdownsvg className={showOptions ? styles.activesvg : null}/> }
                </div>
                { [internalErrors, ...errorMessages ].length > 0 ? <p className={styles.errors}>{ [...errorMessages, internalErrors][0] }</p>: null }
                <div className={ showOptions ? [styles.selectList, styles.activeShowList].join(' ') : styles.selectList}> {
                        internalErrors.length > 0 ? <p className={styles.internalErrors}> { internalErrors } </p> : <ul className={styles.optionHolder}>
                            { categories.map(category => ( <li className={styles.option} onClick={selectOption}> { category.name } </li> )) }
                        </ul>
                } </div>
           </div>
        </Fragment>
    )
}

export default ApiDropDown
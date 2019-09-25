import React from 'react'
import styles from './Error.module.css'
import NotFoundImage from '../../../assets/images/Group 47.svg'
import {NavLink} from 'react-router-dom'

export default function NotFoundError() {
    return (
        <div className={styles.container}>
            <div className={styles.notFound}>
                <img src={NotFoundImage} alt="not-found"/>
                <div className={styles.center}>
                    <h2 className={styles.heading2}>Oops! It appears that this bookshelf does not exist.</h2>
                    <NavLink to="/">
                         <a className={styles.btnRedirect}>
                            Back to home
                        </a>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import NetworkImage from '../../../assets/images/Group 46.svg'
import style from './Error.module.css'


export default function ServerError() {
    return (
        <div className={style.container}>
            <div className={style.server}>
                <img src={NetworkImage} alt="server" />
                <h2 className={style.heading2}>C'mon Server</h2>
                <p className={style.errorText}>
                    Our server is currently down. Please check back later.
                </p>
                <a href="/homepage" className={style.btnRedirect}>
                    Back to home
                </a>
            </div>
        </div>
    )
}

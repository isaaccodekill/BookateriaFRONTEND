import React from 'react'
import styles from './Loader.module.css'

const Loader = ({ height, className, ...rest }) => {
    return (
        <div className={ className ? [ styles.Loader, className ].join(" ") : styles.Loader} {...rest} style={{
            height: height,
            width: height
        }}>
            
        </div>
    )
}

export default Loader

import React, { useContext, useEffect} from 'react'
import styles from './Notification.module.css'
import { NotificationContext } from '../../../Contexts/NotificationContext'
import { ReactComponent as Cancel } from '../../../assets/images/stop.svg'

const Notification = () => {
    const [show, setShow, message, finalClearFunc] = useContext(NotificationContext)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
            // finalClearFunc()
        }, 7000)

        return () => {
            clearTimeout(timer)
        }
    }, [])


    let styleClasses = false ? [styles.Notification, styles.error, styles.active] : [styles.Notification, styles.success, styles.active]
    if (!show){
        styleClasses.push(styles.close)
    }
    

    return (
        <div className={styleClasses.join(' ')}>
            <div className={styles.content}>
                <span>{message}</span>
                <div className={styles.closeBox} onClick={() => setShow(false)}>
                    <Cancel/>
                </div>
            </div>
            <div className={styles.expandableBar}></div>
        </div>
    )
}

export default Notification

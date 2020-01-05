import React, { useContext, useEffect} from 'react'
import styles from './Notification.module.css'
import { NotificationContext } from '../../../Contexts/NotificationContext'
import { ReactComponent as Cancel } from '../../../assets/images/stop.svg'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../../../Actions'

const Notification = () => {
    const dipatch = useDispatch()
    const [show, setShow, setNotification, message, finalClearFunc, type] = useContext(NotificationContext)
    
    let styleClasses =  type ?  [styles.Notification, styles.error] : [styles.Notification, styles.success]
    if (show === false){
        styleClasses.push(styles.close)
    }else if(show === true){
        styleClasses.push(styles.active)
    }

    useEffect(() => {
        if(show){
            const timer = setTimeout(() => {
                setShow(false)
                finalClearFunc()
            }, 7000)
            return () => {
                styleClasses = [styles.Notification]
                clearTimeout(timer)
            }
        }
    }, [show])


    

    return (
        <div className={styleClasses.join(' ')}>
            <div className={styles.content}>
                <span>{message}</span>
                <div className={styles.closeBox} onClick={finalClearFunc}>
                    <Cancel/>
                </div>
            </div>
            <div className={styles.expandableBar}></div>
        </div>
    )
}

export default Notification

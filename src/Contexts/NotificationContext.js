import React, { createContext, useState } from 'react'
import { useDispatch } from 'react-redux'

export const  NotificationContext  = createContext()

const NotificationContextProvider = ({ children }) => {

    function placeHolder(){}

    const dispatch = useDispatch()
    const [ show, setShow ] = useState(null)
    const [ message, setMessage ] = useState("")
    const [clearFunc, setClearFunc] = useState(placeHolder)
    const [type, setType] = useState(false)

    const setNotification =  (error, clearFunction, type) => {
        setShow(true)
        setClearFunc(clearFunction)
        setMessage(error)
        setType(type)
    }

    const finalClearFunc = () => {
        setShow(false)
        dispatch(clearFunc)
    }

    return (
        <NotificationContext.Provider value={[show, setShow, setNotification, message, finalClearFunc, type]}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContextProvider

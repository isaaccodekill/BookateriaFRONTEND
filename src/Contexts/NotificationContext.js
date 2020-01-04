import React, { createContext, useState } from 'react'

export const  NotificationContext  = createContext()

const NotificationContextProvider = ({ children }) => {

    const [ show, setShow ] = useState(false)
    const [ message, setMessage ] = useState("")
    const [clearFunc, setClearFunc] = useState(null)

    const setError =  (error, clearFunction) => {
        setShow(true)
        setClearFunc(clearFunction)
        setMessage(error)
    }

    const finalClearFunc = () => {
        clearFunc()
        setMessage("")
        setShow(false)
    }

    return (
        <NotificationContext.Provider value={[show, setShow, setError, message, finalClearFunc]}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContextProvider

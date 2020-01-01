import React, {useContext} from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { AuthContext } from '../../../Contexts/AuthContext'


const Logout = ({history}) => {
    const [ authState ,  authenticate, logout] = useContext(AuthContext)
    if (!authState){
        history.goBack()
    }else{
        logout()
    }
    return (
        <Redirect to="/" />
    )
}

export default withRouter(Logout)

import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthContext'

const ProtectedRoute = ({ component:Component, path, ...rest }) => {
    const [authState] = useContext(AuthContext)
    return (
        <Route path={path} component={() => authState ? <Component/> : <Redirect to="/login"/> } />
    )
}

export default ProtectedRoute

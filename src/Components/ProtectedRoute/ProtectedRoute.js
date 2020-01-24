import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ component:Component, path }) => {
    const {authState} = useSelector(state => state.auth)
    return (
        <Route path={path} component={() => authState ? <Component/> : <Redirect to="/login"/> } />
    )
}

export default ProtectedRoute

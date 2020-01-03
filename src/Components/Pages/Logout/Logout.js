import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import {authActions} from '../../../Actions'


const Logout = ({history}) => {

    const {authState} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    if (!authState){
        history.goBack()
    }else{
        dispatch(authActions.logout)
    }
    return (
        <Redirect to="/" />
    )
}

export default withRouter(Logout)

import { combineReducers } from 'redux'
import documentReducer from './documentReducer'
import { loadingBarReducer } from 'react-redux-loading-bar'
import  authReducer from './authReducer'
import requestReducer from './requestReducer'

const centralReducer = combineReducers({
    documents: documentReducer,
    loadingBar: loadingBarReducer,
    auth: authReducer,
    request: requestReducer
})


export default centralReducer
import { combineReducers } from 'redux'
import documentReducer from './documentReducer'
import { loadingBarReducer } from 'react-redux-loading-bar'
import  authReducer from './authReducer'


const centralReducer = combineReducers({
    documents: documentReducer,
    loadingBar: loadingBarReducer,
    auth: authReducer
})


export default centralReducer
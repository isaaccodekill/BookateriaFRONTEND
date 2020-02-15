import { combineReducers } from 'redux'
import documentReducer from './documentReducer'
import { loadingBarReducer } from 'react-redux-loading-bar'
import  authReducer from './authReducer'
import requestReducer from './requestReducer'
import searchReducer from './searchReducer'

const centralReducer = combineReducers({
    documents: documentReducer,
    loadingBar: loadingBarReducer,
    auth: authReducer,
    request: requestReducer,
    search: searchReducer
})


export default centralReducer
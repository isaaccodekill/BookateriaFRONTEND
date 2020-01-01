import { combineReducers } from 'redux'
import documentReducer from './documentReducer'
import { loadingBarReducer } from 'react-redux-loading-bar'


const centralReducer = combineReducers({
    documents: documentReducer,
    loadingBar: loadingBarReducer
})


export default centralReducer
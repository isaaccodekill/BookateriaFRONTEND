import * as documentActions from './documentActionVariables'
import {showLoading, hideLoading} from 'react-redux-loading-bar'
import axios from 'axios'

const BASE_URL = 'https://api.bookateria.net/'

const startDocumentAction = () => {
    return {
        type: documentActions.START_DOCUMENT_ACTION
    }
}

const documentActionSuccess = (message) => ({
    type: documentActions.DOCUMENT_ACTION_SUCCESS,
    payload: message
})

const documentActionFailure = (message) => ({
    type: documentActions.DOCUMENT_ACTION_FAILURE,
    payload: message
})

const getAllDocuments = (documents) => ({
    type: documentActions.GET_ALL_DOCUMENTS,
    payload: documents
})

const createDocument = (document) => ({
    type: documentActions.CREATE_DOCUMENT,
    payload: document
    
})

const selectedDocument = (document) => ({
    type: documentActions.SELECT_DOCUMENT,
    payload: document
})

const setCount = (count) => ({
    type: documentActions.SET_COUNT,
    payload: count
})



export const getDocumentsAsync = (pageNumber) => async (dispatch) => {
    try {
        dispatch(startDocumentAction())
        dispatch(showLoading())
        console.log("the thing loader should start showing")
        const result = await axios.get(`${BASE_URL}documents/all/?page=${pageNumber}`)
        dispatch(hideLoading())
        dispatch(getAllDocuments(result.data.results))
        dispatch(setCount(result.data.count))
    }
    catch (error){
        console.log(error)
        dispatch(hideLoading())
    }

    
    // get the documents   
}

export const createDocumentAsync = (docDetails) => (dispatch) => {
    dispatch(startDocumentAction())
    // post documents
}

export const selectedDocumentAsync = (bookID) => (dispatch) => {
    dispatch(startDocumentAction())
}

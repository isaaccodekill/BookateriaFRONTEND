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

export const selectDocument = (document) => {
    return ({
        type: documentActions.SELECT_DOCUMENT,
        payload: document
    })
}

const setCount = (count) => ({
    type: documentActions.SET_COUNT,
    payload: count
})



export const getDocumentsAsync = (pageNumber) => async (dispatch) => {
    try {
        dispatch(startDocumentAction())
        dispatch(showLoading())
        const result = await axios.get(`${BASE_URL}documents/all/?page=${pageNumber}`)
        dispatch(hideLoading())
        dispatch(documentActionSuccess("succesfully gotten the documents"))
        dispatch(getAllDocuments(result.data.results))
        dispatch(setCount(result.data.count))
    }
    catch (error){
        dispatch(hideLoading())
        dispatch(documentActionFailure("failed to get the rrquired documents"))
    }

    
    // get the documents   
}

export const createDocumentAsync = (docDetails) => (dispatch) => {
    dispatch(startDocumentAction())
    // post documents
}

export const selectedDocumentAsync = (bookID) => async (dispatch) => {
    try {
        dispatch(startDocumentAction())
        dispatch(showLoading())
        const result = await axios.get(`${BASE_URL}documents/all/${bookID}`)
        console.log("the result", result)
        dispatch(hideLoading())
        dispatch(documentActionSuccess("gotten the required document"))
        dispatch(selectDocument(result.data))
    } catch (error) {
        dispatch(documentActionFailure("Failed to get the required document"))
        dispatch(hideLoading())
    }
}

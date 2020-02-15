import * as documentActions from './documentActionVariables'
import {showLoading, hideLoading} from 'react-redux-loading-bar'
import axios from 'axios'

const BASE_URL = 'https://api.bookateria.net/'
const Token = localStorage.getItem("BookateriaAuthToken")

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

export const clearSelectedDocument = () => {
    return {
        type: documentActions.CLEAR_SELECTED_DOCUMENT
    }
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
        dispatch(documentActionSuccess("successfully gotten the documents"))
        dispatch(getAllDocuments(result.data.results))
        dispatch(setCount(result.data.count))
    }
    catch (error){
        dispatch(hideLoading())
        dispatch(documentActionFailure("failed to get the required documents"))
    }

    
    // get the documents   
}

export const createDocumentAsync = (docDetails) => async (dispatch) => {
    const fd = new FormData()
    fd.append("image", docDetails.image)
    fd.append("author", docDetails.author)
    fd.append("title", docDetails.title )
    fd.append("category", docDetails.category)
    fd.append("description", docDetails.description)
    fd.append("pdf", docDetails.pdf)
    fd.append("all_tags", docDetails.all_tags)


    try{
        dispatch(startDocumentAction())
        dispatch(showLoading())
        const result = await axios.post(`${BASE_URL}documents/all/`, fd , {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${Token}`
            }
        })
        console.log("the upload result", result)
        dispatch(hideLoading())
        dispatch(documentActionSuccess("Book uploaded"))
        // dispatch(createDocument(result.data)) TODO send the particular result to the document store
    }catch (e) {
        dispatch(hideLoading())
        dispatch(documentActionFailure("Failed to upload document"))
    }
}

export const selectedDocumentAsync = (bookID) => async (dispatch) => {
    try {
        dispatch(startDocumentAction())
        dispatch(showLoading())
        const result = await axios.get(`${BASE_URL}documents/all/${bookID}`)
        dispatch(hideLoading())
        dispatch(documentActionSuccess("gotten the required document"))
        dispatch(selectDocument(result.data))
    } catch (error) {
        dispatch(documentActionFailure("Failed to get the required document"))
        dispatch(hideLoading())
    }
}

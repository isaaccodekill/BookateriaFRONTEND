import * as requestActions from './bookRequestVars'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import axios from 'axios'


const getBooks = (books) => {
    return {
        type: requestActions.GET_REQUESTS,
        payload: books 
    }
}


const addBook = (book) => {
    return {
        type: requestActions.POST_REQUESTS,
        payload: book
    }
}

const requestError = (error) => {
    return {
        type: requestActions.REQ_ERR,
        payload: error
    }
}


export const getBooksAsync = () => async (dispatch) => {
    try {
        dispatch(showLoading())
        const result = await axios.get('https://api.bookateria.net/documents/requests')
        dispatch(getBooks(result.results))
        dispatch(hideLoading())
    } catch (error) {
        dispatch(hideLoading())
        dispatch(requestError(error.message))
    }
}


export const postBooksAsync = (book) => async (dispatch) => {
    try {
        dispatch(showLoading())
        const result = await axios.post('https://api.bookateria.net/documents/requests', book, {
            "Content-Type": "application/json"
        })
        console.log("post request result", result)
        dispatch(hideLoading())
    } catch (error) {
        dispatch(hideLoading())
        dispatch(requestError(error))        
    }
}
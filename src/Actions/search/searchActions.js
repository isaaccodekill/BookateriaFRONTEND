import * as  actions from './searchActionVars'
import axios from 'axios'



const search = (results) => {
    return{
        type: actions.search,
        payload: results
    }
}

const setSearchTerm = (term) => {
    return {
        type: actions.setSearchTerm,
        payload: term
    }
}

const showLoading = () => {
    return{
        type: actions.showLoading
    }
}

const hideLoading = () => {
    return {
        type: actions.hideLoading
    }
}

export const clearResults = () => {
    return {
        type: actions.clearResults
    }
}


export const searchAsync = (term) => async (dispatch) => {
    try {
        dispatch(setSearchTerm(term))
        dispatch(showLoading())
        const result = await axios.get(`https://api.bookateria.net/documents/all/?search=${term}`)
        dispatch(hideLoading())
        console.log("the search results are", result)
        dispatch(search(result.data.results))
    }catch (e) {
        dispatch(hideLoading())
        console.log(e.message)
    }
}



import * as actions from '../Actions/search/searchActionVars'
const initialState = {
    searchResults: [],
    searchTerm: "",
    loading: false
}


const Reducer = (state = initialState, action ) => {
    switch (action.type) {
        case(actions.showLoading):
            return {
                ...state,
                loading: true
            }
        case(actions.hideLoading):
            return {
                ...state, loading: false
            }
        case(actions.clearResults):
            return {
                ...state,
                searchResults: [],
                searchTerm: ""
            }
        case(actions.search):
            return {
                ...state,
                searchResults: [...action.payload]
            }
        case (actions.setSearchTerm):
            return {
                searchResults: [ ...state.searchResults ]
            }
        default:
            return state

    }
}


export default Reducer
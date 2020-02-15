import * as documentActions  from '../Actions/documents/documentActionVariables'
const initialStore = {
    loading: false,
    count: 0,
    documents: [],
    selectedDocument: null,
    success: {
        status: false,
        message: ''
    },
    error: {
        status: false,
        errorType: '',
        errorMessage: ''
    }
}



export default function documentReducer(state = initialStore, action){
    switch(action.type){
        case(documentActions.START_DOCUMENT_ACTION):
             return {
                ...state,
                loading: true
            }
        case(documentActions.DOCUMENT_ACTION_SUCCESS):
            return {
                ...state,
                loading: false,
                success: {
                    status: true,
                    message: action.payload
                }
            }
        case (documentActions.CLEAR_SELECTED_DOCUMENT):
            return{
                ...state,
                selectedDocument: null
            }
        case(documentActions.DOCUMENT_ACTION_FAILURE):
            return {
                ...state,
                loading: false,
                success: {
                    status: false,
                    message: ''
                },
                error: {
                    status: true,
                    message: action.payload
                }
            }             
        case(documentActions.GET_ALL_DOCUMENTS):
            return {
                ...state,
                documents: action.payload,
                loading: false
            }
        case(documentActions.SET_COUNT):
            return {
                ...state,
                count: action.payload
            }
        case(documentActions.SELECT_DOCUMENT):
            return {
                ...state,
                selectedDocument: {...action.payload}
            }    
        default:
            return state
    }
}
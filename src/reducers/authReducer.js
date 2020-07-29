import * as ACTION_TYPES from '../actions/action_types'


const initialState = {
    is_authenticated: false,
    isSignedIn: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SIGN_IN:
            return {
                ...state,
                isSignedIn: true
            }
        case ACTION_TYPES.SIGN_OUT:
            return {
                ...state,
                isSignedIn: false
            }
        default:
            return state
    }
}
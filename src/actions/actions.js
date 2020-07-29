import * as ACTION_TYPES from './action_types'

export const signIn = (userId) => {
    return {
        type: ACTION_TYPES.SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: ACTION_TYPES.SIGN_OUT
    }
}
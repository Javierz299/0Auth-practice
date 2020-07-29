import * as ACTION_TYPES from './action_types'

export const signIn = () => {
    return {
        type: ACTION_TYPES.SIGN_IN
    }
}

export const signOut = () => {
    return {
        type: ACTION_TYPES.SIGN_OUT
    }
}
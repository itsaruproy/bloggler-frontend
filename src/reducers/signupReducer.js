import { USERNAME_EXISTS, EMAIL_EXISTS } from '../actions/types'

const INITIAL_STATE = {
    usernameExists: false,
    emailExists: false,
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_EXISTS:
            return {
                ...state,
                usernameExists: action.payload,
            }
        case EMAIL_EXISTS:
            return {
                ...state,
                emailExists: action.payload,
            }
        default:
            return state
    }
}

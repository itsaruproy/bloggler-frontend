import { USERNAME_EXISTS, EMAIL_EXISTS } from '../actions/types'

const canSubmitForm = (usernameExists, emailExists) => {
    return usernameExists === false && emailExists === false
}

const INITIAL_STATE = {
    usernameExists: false,
    emailExists: false,
    canSubmit: false,
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_EXISTS:
            return {
                ...state,
                usernameExists: action.payload,
                canSubmit: canSubmitForm(
                    state.usernameExists,
                    state.emailExists
                ),
            }
        case EMAIL_EXISTS:
            return {
                ...state,
                emailExists: action.payload,
                canSubmit: canSubmitForm(
                    state.usernameExists,
                    state.emailExists
                ),
            }
        default:
            return state
    }
}

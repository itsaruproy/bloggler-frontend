import { SIGN_IN, SIGN_OUT } from '../actions/types'

const INITIAL_STATE = {
    Token: localStorage.getItem('bloggler-token'),
    Username: localStorage.getItem('bloggler-username'),
    LoggedIn: Boolean(localStorage.getItem('bloggler-token')),
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                Token: action.payload.token,
                Username: action.payload.username,
            }
        case SIGN_OUT:
            return {
                ...state,
                Token: action.payload.token,
                Username: action.payload.username,
            }
        default:
            return state
    }
}

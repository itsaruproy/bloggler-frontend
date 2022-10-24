import { FETCH_PROFILE_INFO } from '../actions/types'

const INITIAL_STATE = {}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PROFILE_INFO:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

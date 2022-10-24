import { FETCH_POSTS } from '../actions/types'

const INITIAL_STATE = {}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

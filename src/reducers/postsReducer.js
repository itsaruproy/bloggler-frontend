import { FETCH_POSTS } from '../actions/types'

const INITIAL_STATE = []

const createNewState = action => {
    if (action.payload.length > 0) {
        return [...action.payload]
    }

    return []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return createNewState(action)
        default:
            return state
    }
}

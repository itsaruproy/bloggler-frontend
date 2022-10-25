import { FETCH_SINGLE_POST } from '../actions/types'

const INITIAL_STATE = {}

const createNewState = action => {
    if (action.payload.length > 0) {
        return [...action.payload]
    }

    return []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_SINGLE_POST:
            return { ...action.payload }
        default:
            return state
    }
}

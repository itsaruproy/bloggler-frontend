import { combineReducers } from 'redux'

import authReducer from './authReducer'
import listReducer from './listReducer'
import feedReducer from './feedReducer'
import profileInfoReducer from './profileInfoReducer'

export default combineReducers({
    auth: authReducer,
    feed: feedReducer,
    profileInfo: profileInfoReducer,
})

import { combineReducers } from 'redux'

import authReducer from './authReducer'
import listReducer from './listReducer'
import feedReducer from './feedReducer'
import profileInfoReducer from './profileInfoReducer'
import postsReducer from './postsReducer'

export default combineReducers({
    auth: authReducer,
    feed: feedReducer,
    profileInfo: profileInfoReducer,
    profilePosts: postsReducer,
})

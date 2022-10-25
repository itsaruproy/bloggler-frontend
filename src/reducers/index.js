import { combineReducers } from 'redux'

import authReducer from './authReducer'
import listReducer from './listReducer'
import feedReducer from './feedReducer'
import profileInfoReducer from './profileInfoReducer'
import postsReducer from './postsReducer'
import followersReducer from './followersReducer'
import followingReducer from './followingReducer'
import tabIndexReducer from './tabIndexReducer'
import singlePostReducer from './singlePostReducer'

export default combineReducers({
    auth: authReducer,
    feed: feedReducer,
    profileInfo: profileInfoReducer,
    profilePosts: postsReducer,
    profileFollowers: followersReducer,
    profileFollowings: followingReducer,
    tabIndex: tabIndexReducer,
    singlePostDetails: singlePostReducer,
})

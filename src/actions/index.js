import axios from 'axios'
import history from '../history'
import {
    SIGN_UP,
    SIGN_IN,
    SIGN_OUT,
    FETCH_FEED,
    ADD_NEW_TARGET,
    DELETE_TARGET,
    FETCH_PROFILE_INFO,
    FETCH_POSTS,
    FETCH_FOLLOWERS,
    FETCH_FOLLOWINGS,
    TAB_CHANGE,
    CREATE_POST,
    FETCH_SINGLE_POST,
    DELETE_SINGLE_POST,
    EDIT_SINGLE_POST,
} from './types'
import { BASE_URL } from '../constants'

export const fetchSinglePost = postid => async (dispatch, getState) => {
    try {
        const response = await axios.get(BASE_URL + `/post/${postid}`)
        console.log('From actions', response.data)
        dispatch({
            type: FETCH_SINGLE_POST,
            payload: response.data,
        })
    } catch (e) {
        console.log('Single post fetching problem', e)
    }
}

export const editSinglePost =
    (postid, title, body) => async (dispatch, getState) => {
        const { Token, Username } = getState().auth
        try {
            const response = await axios.post(
                BASE_URL + `/post/${postid}/edit`,
                {
                    title: title,
                    body: body,
                    token: Token,
                }
            )
            dispatch({
                type: EDIT_SINGLE_POST,
                payload: {
                    title: title,
                    body: body,
                },
            })
        } catch (e) {
            console.log('Edit post action ', e)
        }
    }

export const deleteSinglePost = postid => async (dispatch, getState) => {
    const { Token, Username } = getState().auth
    try {
        const response = await axios.delete(BASE_URL + `/post/${postid}`, {
            data: { token: Token },
        })

        console.log('Delete Post', response)
        if (response.status === 200) {
            //1.display a flash message
            dispatch({
                type: DELETE_SINGLE_POST,
                payload: null,
            })
            history.push(`/profile/${Username}`)
        }
    } catch (e) {
        console.log('oops')
    }
}

export const createPost = (title, body) => async (dispatch, getState) => {
    const { Token } = getState().auth
    try {
        const response = await axios.post(BASE_URL + '/create-post', {
            title,
            body,
            token: Token,
        })
        dispatch({
            type: CREATE_POST,
            payload: null,
        })
        history.push(`/post/${response.data}`)
        console.log(`New post was created. ${response.data}`)
        return
    } catch (e) {
        console.log('Create Post problem', e)
    }
}

export const tabChange = newIndex => async (dispatch, getState) => {
    const { index } = getState().tabIndex
    console.log('Index from tabChange function', index)
    if (index !== newIndex) {
        dispatch({
            type: TAB_CHANGE,
            payload: {
                index: newIndex,
            },
        })
    }
}

export const signUp =
    (username, email, password) => async (dispatch, getState) => {
        const ourRequest = axios.CancelToken.source()
        try {
            const response = await axios.post(
                BASE_URL + '/register',
                {
                    username: username,
                    email: email,
                    password: password,
                },
                { cancelToken: ourRequest.token }
            )
            console.log(response.data)
            // appDispatch({ type: 'login', data: response.data })
            // // appDispatch({ type: "flashMessage", value: "Congrats! Welcome to your new account." })
            // appDispatch({
            //     type: 'flashMessage',
            //     value: 'You have Successfully logged in',
            //     isPos: 'success',
            // })
        } catch (e) {
            console.log('There was a problem or the request was cancelled.')
        }
    }

export const signIn = (username, password) => async (dispatch, getState) => {
    try {
        const response = await axios.post(BASE_URL + '/login', {
            username,
            password,
        })
        // console.log(response.data);
        if (response.data) {
            // navigate("/")
            console.log(response.data)
            // console.log("logged in");
            localStorage.setItem('bloggler-token', response.data.token)
            localStorage.setItem('bloggler-username', response.data.username)
            dispatch({
                type: SIGN_IN,
                payload: {
                    token: response.data.token,
                    username: response.data.username,
                },
            })
        } else {
            // alert("Incorrenct username or password")
        }
    } catch (e) {
        console.log('There was a problem.')
    }
}

export const signOut = () => {
    localStorage.removeItem('bloggler-token')
    localStorage.removeItem('bloggler-username')
    return {
        type: SIGN_OUT,
        payload: {
            token: null,
            username: null,
        },
    }
}

export const fetchFeed = () => async (dispatch, getState) => {
    try {
        const { Token } = getState().auth
        const response = await axios.post(BASE_URL + '/getHomeFeed', {
            token: Token,
        })
        console.log(response.data)

        let postsObj = {}
        response.data.forEach(post => {
            postsObj[post._id] = { ...post }
        })

        /*
            dispatch feed data to feed reducer
        */
        dispatch({
            type: FETCH_FEED,
            payload: postsObj,
        })
    } catch (e) {
        console.log('Feed Fetching problem: ', e)
        console.log('problem')
    }
}

export const fetchProfileInfo = username => async (dispatch, getState) => {
    try {
        const { Token } = getState().auth
        const response = await axios.post(BASE_URL + `/profile/${username}`, {
            token: Token,
        })
        console.log(response.data)

        /*
            dispatch feed data to feed reducer
        */
        dispatch({
            type: FETCH_PROFILE_INFO,
            payload: response.data,
        })
    } catch (e) {
        console.log('Profile info Fetching problem: ', e)
        console.log('problem')
    }
}

export const fetchProfilePosts = username => async (dispatch, getState) => {
    try {
        const response = await axios.get(
            BASE_URL + `/profile/${username}/posts`
        )
        console.log(response.data)

        /*
            dispatch feed data to feed reducer
        */
        dispatch({
            type: FETCH_POSTS,
            payload: response.data,
        })
    } catch (e) {
        console.log('Profile posts Fetching problem: ', e)
        console.log('problem')
    }
}

export const fetchProfileFollowers = username => async (dispatch, getState) => {
    try {
        const response = await axios.get(
            BASE_URL + `/profile/${username}/followers`
        )
        console.log(response.data)

        /*
            dispatch feed data to feed reducer
        */
        dispatch({
            type: FETCH_FOLLOWERS,
            payload: response.data,
        })
    } catch (e) {
        console.log('Profile followers Fetching problem: ', e)
        console.log('problem')
    }
}

export const fetchProfileFollowings =
    username => async (dispatch, getState) => {
        try {
            const response = await axios.get(
                BASE_URL + `/profile/${username}/following`
            )
            console.log(response.data)

            /*
            dispatch feed data to feed reducer
        */
            dispatch({
                type: FETCH_FOLLOWINGS,
                payload: response.data,
            })
        } catch (e) {
            console.log('Profile follwoings Fetching problem: ', e)
            console.log('problem')
        }
    }

export const addNewTarget =
    (targetName, folderID) => async (dispatch, getState) => {
        try {
            const { Token } = getState().auth
            console.log(Token)
            const response = await axios.post(BASE_URL + '/link/create', {
                token: Token,
                targetName: targetName,
                folderID: folderID,
            })

            dispatch({
                type: ADD_NEW_TARGET,
                payload: null,
            })

            history.push('/')

            /* let linksObj = {}
            response.data.links.forEach(link => {
                linksObj[link._id] = { ...link }
            })

             */
        } catch (err) {
            console.log(err)
        }
    }

export const deleteTarget = (linkID, _id) => async (dispatch, getState) => {
    try {
        const { Token } = getState().auth
        // console.log(Token)
        const response = await axios.post(BASE_URL + `/link/delete/${linkID}`, {
            token: Token,
        })

        return dispatch({
            type: DELETE_TARGET,
            payload: _id,
        })
    } catch (err) {}
}

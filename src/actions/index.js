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
} from './types'
import { BASE_URL } from '../constants'

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

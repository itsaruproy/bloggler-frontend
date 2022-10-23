import axios from 'axios'
import history from '../history'
import {
    SIGN_UP,
    SIGN_IN,
    SIGN_OUT,
    FETCH_LINKS,
    ADD_NEW_TARGET,
    DELETE_TARGET,
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

export const signIn = code => {
    localStorage.setItem('auth-token', code)
    return {
        type: SIGN_IN,
        payload: code,
    }
}

export const signOut = () => {
    localStorage.removeItem('auth-token')
    return {
        type: SIGN_OUT,
        payload: null,
    }
}

export const fetchLinks = () => async (dispatch, getState) => {
    try {
        const { Token } = getState().auth
        console.log(Token)
        const response = await axios.post(BASE_URL + '/link/get', {
            token: Token,
        })

        let linksObj = {}
        response.data.links.forEach(link => {
            linksObj[link._id] = { ...link }
        })

        dispatch({
            type: FETCH_LINKS,
            payload: linksObj,
        })
    } catch (err) {
        dispatch({
            type: FETCH_LINKS,
            payload: null,
        })
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

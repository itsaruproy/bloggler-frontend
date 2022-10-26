import axios from 'axios'
import history from '../../history'
import { BASE_URL } from '../../constants'
import { USERNAME_EXISTS, EMAIL_EXISTS } from '../types'

export const checkUsername = username => async (dispatch, getState) => {
    try {
        const response = await axios.post(BASE_URL + '/doesUsernameExist', {
            username: username,
        })
        console.log('Check username Action', response.data)
    } catch (e) {
        console.log('problem')
    }
}

export const checkEmail = email => async (dispatch, getState) => {
    try {
        const response = await axios.post(BASE_URL + '/doesEmailExist', {
            email: email,
        })
        console.log('Check email Action', response.data)
    } catch (e) {
        console.log('problem')
    }
}

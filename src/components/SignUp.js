import React, { useState, useEffect } from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Text,
} from '@chakra-ui/react'

import { connect, useDispatch } from 'react-redux'
import { signUp } from '../actions'
import { checkUsername, checkEmail } from '../actions/signupForm'

const SignUp = props => {
    const { checkUsername, checkEmail, SignUpValidation } = props
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [finalusername, setFinalusername] = useState()
    const [finalemail, setFinalemail] = useState()

    useEffect(() => {
        const usernameId = setTimeout(() => {
            setFinalusername(username)
        }, 1000)

        return () => clearTimeout(usernameId)
    }, [username])

    useEffect(() => {
        const emailId = setTimeout(() => {
            setFinalemail(email)
        }, 1000)

        return () => clearTimeout(emailId)
    }, [email])

    useEffect(() => {
        if (finalusername) {
            // make network request to check if username already exist
            console.log('Checking if usernmae exists')
            checkUsername(finalusername)
        }
    }, [finalusername, checkUsername])

    useEffect(() => {
        if (finalemail) {
            // make network request to check if email already exist
            console.log('Checking if email exists')
            checkEmail(finalemail)
        }
    }, [finalemail, checkEmail])

    const signUpHandler = () => {
        let { usernameExists, emailExists } = SignUpValidation
        if (!usernameExists && !emailExists && password) {
            props.signUp(finalusername, finalemail, password)
        }
    }

    return (
        <Box maxW={'300px'}>
            <Box>
                <Text>Username</Text>
                <Input
                    key={'1'}
                    value={username}
                    onChange={e => setUsername(e.target.value.toLowerCase())}
                    borderColor={'teal'}
                    type="text"
                    placeholder={'Choose your username'}
                />
                {/* <FormHelperText>Username must be unique</FormHelperText> */}
                <Text>Email</Text>
                <Input
                    key={'2'}
                    value={email}
                    onChange={e => setEmail(e.target.value.toLowerCase())}
                    borderColor={'teal'}
                    type="email"
                    placeholder={'jhon@doe.com'}
                />
                {/* <FormHelperText>Email must exists</FormHelperText> */}
                <Text>Password</Text>
                <Input
                    key={'3'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    borderColor={'teal'}
                    type="password"
                    placeholder={'Create a new password'}
                />
                {/* <FormHelperText>Password must be alphanumeric</FormHelperText> */}
                <Button
                    mt={'1rem'}
                    onClick={signUpHandler}
                    w={'full'}
                    colorScheme={'teal'}
                >
                    Sign Up
                </Button>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => {
    return { SignUpValidation: state.signUpValidation }
}

export default connect(mapStateToProps, { signUp, checkEmail, checkUsername })(
    SignUp
)

import React, { useState } from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Text
} from '@chakra-ui/react'

import { connect } from 'react-redux'
import { signUp } from '../actions'

const SignUp = props => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUpHandler = () => {
        props.signUp(username, email, password)
    }

    return (
        <Box maxW={'300px'}>
            <Box>
                <Text>Username</Text>
                <Input
                    key={'1'}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    borderColor={'teal'}
                    type="text"
                    placeholder={'Choose your username'}
                />
                {/* <FormHelperText>Username must be unique</FormHelperText> */}
                <Text>Email</Text>
                <Input
                    key={'2'}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                <Button onClick={signUpHandler} w={'full'} colorScheme={'teal'}>
                    Sign Up
                </Button>
            </Box>
        </Box>
    )
}

export default connect(null, { signUp })(SignUp)

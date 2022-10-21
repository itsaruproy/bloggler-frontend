import React from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
} from '@chakra-ui/react'

const SignUp = () => {
    return (
        <Box maxW={'300px'}>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                    borderColor={'teal'}
                    type="text"
                    placeholder={'Choose your username'}
                />
                <FormHelperText>Username must be unique</FormHelperText>
                <FormLabel>Email</FormLabel>
                <Input
                    borderColor={'teal'}
                    type="email"
                    placeholder={'jhon@doe.com'}
                />
                <FormHelperText>Email must exists</FormHelperText>
                <FormLabel>Password</FormLabel>
                <Input
                    borderColor={'teal'}
                    type="password"
                    placeholder={'Create a new password'}
                />
                <FormHelperText>Password must be alphanumeric</FormHelperText>
                <Button w={'full'} colorScheme={'teal'}>
                    Sign Up
                </Button>
            </FormControl>
        </Box>
    )
}

export default SignUp

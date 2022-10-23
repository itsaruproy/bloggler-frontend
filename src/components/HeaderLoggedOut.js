import { HStack, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

import { connect } from 'react-redux'
import { signIn } from '../actions'

const HeaderLoggedOut = props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = () => {
        props.signIn(username, password)
    }

    return (
        <HStack>
            <HStack spacing={'2'}>
                <Input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    borderColor={'teal'}
                    _hover={{ opacity: 1 }}
                    size={'sm'}
                    type={'text'}
                    autoComplete={'off'}
                    placeholder={'Username'}
                />
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    borderColor={'teal'}
                    _hover={{ opacity: 1 }}
                    size={'sm'}
                    type={'password'}
                    autoComplete={'off'}
                    placeholder={'Password'}
                />
            </HStack>
            <Button onClick={onSubmitHandler} size={'sm'} colorScheme={'teal'}>
                Sign In
            </Button>
        </HStack>
    )
}

export default connect(null, { signIn })(HeaderLoggedOut)

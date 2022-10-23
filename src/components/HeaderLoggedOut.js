import { HStack, Input, Button } from '@chakra-ui/react'
import React from 'react'

const HeaderLoggedOut = () => {
    return (
        <HStack>
            <HStack spacing={'2'}>
                <Input
                    borderColor={'teal'}
                    _hover={{ opacity: 1 }}
                    size={'sm'}
                    type={'text'}
                    autoComplete={'off'}
                    placeholder={'Username'}
                />
                <Input
                    borderColor={'teal'}
                    _hover={{ opacity: 1 }}
                    size={'sm'}
                    type={'password'}
                    autoComplete={'off'}
                    placeholder={'Password'}
                />
            </HStack>
            <Button size={'sm'} colorScheme={'teal'}>
                Sign In
            </Button>
        </HStack>
    )
}

export default HeaderLoggedOut

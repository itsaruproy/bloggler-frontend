import React from 'react'
import { Button, HStack, Icon, Link as ChakraLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'

const HeaderLoggedIn = () => {
    return (
        <HStack spacing={'2'} alignItems={'center'}>
            <ChakraLink as={Link} to={'/profile/arup'}>
                <Icon w={'5'} h={'5'} as={AiOutlineUser} />
            </ChakraLink>
            <ChakraLink
                style={{ textDecoration: 'none' }}
                as={Link}
                to={'/create-post'}
            >
                <Button size={'sm'} colorScheme={'teal'}>
                    Create Post
                </Button>
            </ChakraLink>

            <Button size={'sm'} colorScheme={'red'}>
                Log Out
            </Button>
        </HStack>
    )
}

export default HeaderLoggedIn

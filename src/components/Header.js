import React from 'react'
import { Box, Button, Flex, HStack, Input, Link } from '@chakra-ui/react'
import HeaderLoggedIn from './HeaderLoggedIn'
import HeaderLoggedOut from './HeaderLoggedOut'

const Header = () => {
    return (
        <Flex maxW={'1200px'} bg={'gray.100'} mx={'auto'}>
            <Box
                py={'5'}
                w={'100%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Box>
                    <Link fontWeight={'semibold'}>Bloggler</Link>
                </Box>
                <Box display={'flex'} gap={'2'}>
                    <HeaderLoggedOut />
                </Box>
            </Box>
        </Flex>
    )
}

export default Header

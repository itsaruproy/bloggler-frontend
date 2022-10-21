import React from 'react'
import { Box, Button, Flex, HStack, Input, Link } from '@chakra-ui/react'

const Header = () => {
    return (
        <Flex w={'100%'} bg={'gray.100'}>
            <Box
                px={'10'}
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
                </Box>
            </Box>
        </Flex>
    )
}

export default Header

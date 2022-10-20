import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'

const App = () => {
    return (
        <Box w={'100%'} minH={'100vh'} bg={'gray.50'}>
            <Header />
        </Box>
    )
}

export default App

import { Box } from '@chakra-ui/react'
import React from 'react'
import Error from './Error'
import Header from './Header'

const App = () => {
    return (
        <Box w={'100%'} minH={'100vh'} bg={'gray.50'}>
            {/* <Header /> */}
            <Error />
        </Box>
    )
}

export default App

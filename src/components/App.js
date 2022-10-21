import { Box } from '@chakra-ui/react'
import React from 'react'
import Error from './Error'
import GuestHome from './GuestHome'
import Header from './Header'
import SignUp from './SignUp'

const App = () => {
    return (
        <Box w={'100%'} minH={'100vh'} bg={'gray.100'}>
            <Header />
            {/* <Error /> */}
            {/* <SignUp /> */}
            <GuestHome />
        </Box>
    )
}

export default App

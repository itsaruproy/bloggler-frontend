import { Box } from '@chakra-ui/react'
import React from 'react'
import CreatePost from './CreatePost'
import Error from './Error'
import GuestHome from './GuestHome'
import Header from './Header'
import Profile from './Profile'
import SignUp from './SignUp'

const App = () => {
    return (
        <Box w={'100%'} minH={'100vh'} bg={'gray.100'}>
            <Header />
            {/* <Error /> */}
            {/* <SignUp /> */}
            {/* <GuestHome /> */}
            {/* <Profile /> */}
            <CreatePost />
        </Box>
    )
}

export default App

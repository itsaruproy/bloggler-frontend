import React from 'react'
import {
    Button,
    HStack,
    Icon,
    Link as ChakraLink,
    Avatar,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'

import { connect } from 'react-redux'
import { signOut } from '../actions'

const HeaderLoggedIn = props => {
    const signOutHandler = () => {
        props.signOut()
    }
    return (
        <HStack spacing={'2'} alignItems={'center'}>
            <ChakraLink as={Link} to={`/profile/${props.Username}`}>
                <Avatar w={'8'} h={'8'} icon={<AiOutlineUser />} />
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

            <Button onClick={signOutHandler} size={'sm'} colorScheme={'red'}>
                Log Out
            </Button>
        </HStack>
    )
}

const mapStateToProps = state => {
    return { Token: state.auth.Token, Username: state.auth.Username }
}
export default connect(mapStateToProps, { signOut })(HeaderLoggedIn)

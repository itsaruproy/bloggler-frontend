import React, { useEffect } from 'react'
import {
    Box,
    Button,
    Flex,
    Icon,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Link,
} from '@chakra-ui/react'
import { AiOutlineUser } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProfileInfo } from '../actions'

const Profile = props => {
    const username = props.match.params.username
    const { fetchProfileInfo } = props
    console.log('Username from URL', username)

    useEffect(() => {
        fetchProfileInfo(username)
        console.log('useEffect ran inside the fetch user data')
    }, [username, fetchProfileInfo])

    return (
        <Flex alignItems={'center'} mt={'20'} flexDirection={'column'}>
            <Flex alignItems={'center'} gap={'5'}>
                <Icon as={AiOutlineUser} />
                <Text>Arup Roy</Text>
                <Button size={'sm'} colorScheme={'teal'}>
                    Follow
                </Button>
            </Flex>
            <Box mt={'1rem'}>
                <Tabs size={'lg'}>
                    <TabList>
                        <Tab>Posts</Tab>
                        <Tab>Followers</Tab>
                        <Tab>Following</Tab>
                    </TabList>
                </Tabs>

                {/* Here we'll return a div with the necessary contents using route tags not using tabpanels*/}

                <Box>
                    <Text>New Post</Text>
                </Box>
            </Box>
        </Flex>
    )
}

const mapStateToProps = state => {
    return { ProfileInfo: state.profileInfo }
}
export default connect(mapStateToProps, { fetchProfileInfo })(Profile)

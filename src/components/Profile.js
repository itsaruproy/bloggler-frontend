import React, { useEffect } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from '../history'
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
    Link as ChakraLink,
} from '@chakra-ui/react'
import { AiOutlineUser } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProfileInfo } from '../actions'
import ViewPost from './ViewPost'
import ProfilePosts from './ProfilePosts'
import ProfileFollowers from './ProfileFollowers'
import ProfileFollowing from './ProfileFollowing'

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
                <Text>{props.ProfileInfo.profileUsername}</Text>
                <Button size={'sm'} colorScheme={'teal'}>
                    Follow
                </Button>
            </Flex>
            <Box mt={'1rem'}>
                <Tabs size={'lg'}>
                    <TabList>
                        <Tab>
                            <ChakraLink
                                as={NavLink}
                                to={`/profile/${username}`}
                            >
                                Posts
                            </ChakraLink>
                        </Tab>
                        <Tab>
                            <ChakraLink
                                as={NavLink}
                                to={`/profile/${username}/followers`}
                            >
                                Followers
                            </ChakraLink>
                        </Tab>
                        <Tab>
                            <ChakraLink
                                as={NavLink}
                                to={`/profile/${username}/following`}
                            >
                                Following
                            </ChakraLink>
                        </Tab>
                    </TabList>
                </Tabs>

                {/* Here we'll return a div with the necessary contents using route tags not using tabpanels*/}

                <Box>
                    <Text>New Post</Text>
                </Box>
            </Box>
            <Router history={history}>
                <Route
                    exact
                    path="/profile/:username"
                    component={ProfilePosts}
                />
                <Route
                    exact
                    path="/profile/:username/followers"
                    component={ProfileFollowers}
                />
                <Route
                    exact
                    path="/profile/:username/following"
                    component={ProfileFollowing}
                />
            </Router>
        </Flex>
    )
}

const mapStateToProps = state => {
    return { ProfileInfo: state.profileInfo }
}
export default connect(mapStateToProps, { fetchProfileInfo })(Profile)

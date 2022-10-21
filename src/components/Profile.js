import React from 'react'
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

const Profile = () => {
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

                    <TabPanels>
                        <TabPanel>
                            <Link>
                                <Box bg={'gray.300'}>
                                    <Text>The new carpet</Text>
                                    <Text>02/10/2021</Text>
                                </Box>
                            </Link>
                            <Link>
                                <Box bg={'gray.300'}>
                                    <Text>The new carpet</Text>
                                    <Text>02/10/2021</Text>
                                </Box>
                            </Link>
                            <Link>
                                <Box bg={'gray.300'}>
                                    <Text>The new carpet</Text>
                                    <Text>02/10/2021</Text>
                                </Box>
                            </Link>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex>
    )
}

export default Profile

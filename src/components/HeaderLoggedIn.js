import React, { useEffect, useState } from 'react'
import {
    Button,
    HStack,
    Icon,
    Link as ChakraLink,
    Avatar,
    useDisclosure,
    Flex,
    Input,
    Text,
} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { SearchIcon } from '@chakra-ui/icons'
import { AiOutlineUser } from 'react-icons/ai'

import { connect } from 'react-redux'
import { signOut } from '../actions'
import { BASE_URL } from '../constants'
import axios from 'axios'

function SearchModal(props) {
    const { isOpen, onOpen, onClose } = props
    const [posts, setPosts] = useState([])
    const [term, setTerm] = useState('')
    const [finalterm, setFinalterm] = useState()

    useEffect(() => {
        const termid = setTimeout(() => {
            setFinalterm(term)
        }, 1000)

        return () => clearTimeout(termid)
    }, [term])

    useEffect(() => {
        if (finalterm) {
            async function fetchResults() {
                try {
                    const response = await axios.post(BASE_URL + '/search', {
                        searchTerm: finalterm,
                    })
                    setPosts(response.data)
                } catch (e) {
                    console.log('prolem')
                }
            }
            fetchResults()
        }
    }, [finalterm])

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <HStack
                        py={'1rem'}
                        px={'1rem'}
                        spacing={'5px'}
                        justifyContent={'space-between'}
                    >
                        <Input
                            value={term}
                            onChange={e => setTerm(e.target.value)}
                            placeholder={'Search articles'}
                        />
                    </HStack>
                    <ModalCloseButton />

                    <ModalBody>
                        <Flex direction={'column'}>
                            {posts.map(post => {
                                return <Text>{post.title}</Text>
                            })}
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

const HeaderLoggedIn = props => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const signOutHandler = () => {
        props.signOut()
    }
    return (
        <HStack spacing={'2'} alignItems={'center'}>
            <SearchIcon onClick={onOpen} />
            <SearchModal isOpen={isOpen} onOpe={onOpen} onClose={onClose} />
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

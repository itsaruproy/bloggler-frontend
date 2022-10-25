import React, { useState, useEffect } from 'react'
import {
    Flex,
    Text,
    Heading,
    HStack,
    Icon,
    Link as ChakraLink,
} from '@chakra-ui/react'
import { AiOutlineUser } from 'react-icons/ai'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { fetchSinglePost } from '../actions'
import { connect } from 'react-redux'

const ViewPost = props => {
    const postid = props.match.params.id
    const { fetchSinglePost } = props
    const { PostInfo } = props
    console.log('From ViewPost : ', PostInfo)
    useEffect(() => {
        fetchSinglePost(postid)
    }, [postid, fetchSinglePost])

    const renderPost = () => {
        if (Object.keys(PostInfo).length !== 0) {
            return (
                <Flex
                    flexDirection={'column'}
                    maxW={'1200px'}
                    mx={'auto'}
                    mt={'5'}
                    gap={'1rem'}
                >
                    <Heading>{PostInfo.title}</Heading>
                    <HStack justifyContent={'space-between'}>
                        <HStack>
                            <Icon as={AiOutlineUser} />
                            <Text>{PostInfo.author.username}</Text>
                            <Text>02/10/2021</Text>
                        </HStack>
                        <HStack spacing={'.5rem'}>
                            <ChakraLink
                                as={Link}
                                to={`/post/${PostInfo._id}/edit`}
                            >
                                <EditIcon />
                            </ChakraLink>
                            <ChakraLink>
                                <DeleteIcon />
                            </ChakraLink>
                        </HStack>
                    </HStack>

                    <Text>{PostInfo.body}</Text>
                </Flex>
            )
        }
        return <div>Loading...</div>
    }

    return <>{renderPost()}</>
}

const mapStateToProps = state => {
    return { PostInfo: state.singlePostDetails }
}

export default connect(mapStateToProps, { fetchSinglePost })(ViewPost)

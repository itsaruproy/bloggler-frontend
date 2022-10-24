import React, { useState, useEffect } from 'react'
import { Flex, Text, Heading, HStack, Icon } from '@chakra-ui/react'
import { AiOutlineUser } from 'react-icons/ai'
import axios from 'axios'
import { BASE_URL } from '../constants'

const ViewPost = props => {
    const postid = props.match.params.id

    const [post, setPost] = useState()

    useEffect(() => {
        const ourRequest = axios.CancelToken.source()
        async function fetchPost() {
            try {
                const response = await axios.get(BASE_URL + `/post/${postid}`, {
                    cancelToken: ourRequest.token,
                })
                console.log(response.data)
                setPost(response.data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchPost()
        return () => {
            ourRequest.cancel()
        }
    }, [postid])

    const renderPost = () => {
        if (post) {
            return (
                <Flex
                    flexDirection={'column'}
                    maxW={'1200px'}
                    mx={'auto'}
                    mt={'5'}
                    gap={'1rem'}
                >
                    <Heading>{post.title}</Heading>
                    <HStack>
                        <Icon as={AiOutlineUser} />
                        <Text>{post.author.username}</Text>
                        <Text>02/10/2021</Text>
                    </HStack>
                    <Text>{post.body}</Text>
                </Flex>
            )
        }
        return <div>Loading...</div>
    }

    return <>{renderPost()}</>
}

export default ViewPost

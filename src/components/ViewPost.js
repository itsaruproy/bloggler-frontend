import React from 'react'
import { Flex, Text, Heading, HStack, Icon } from '@chakra-ui/react'
import { AiOutlineUser } from 'react-icons/ai'

const ViewPost = () => {
    return (
        <Flex
            flexDirection={'column'}
            maxW={'1200px'}
            mx={'auto'}
            mt={'5'}
            gap={'1rem'}
        >
            <Heading>Post Heading</Heading>
            <HStack>
                <Icon as={AiOutlineUser} />
                <Text>Arup Roy</Text>
                <Text>02/10/2021</Text>
            </HStack>
            <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more
            </Text>
        </Flex>
    )
}

export default ViewPost

import React from 'react'
import { Flex, Input, Textarea, Text, Button } from '@chakra-ui/react'

const CreatePost = () => {
    return (
        <Flex flexDirection={'column'} maxW={'1200px'} mx={'auto'} mt={'5'}>
            <Text>Title</Text>
            <Input borderColor={'teal'} size={'lg'} />
            <Text>Body Content</Text>
            <Textarea borderColor={'teal'} h={'293px'} size={'lg'} />
            <Button mt={'1rem'} colorScheme={'teal'}>
                Submit
            </Button>
        </Flex>
    )
}

export default CreatePost

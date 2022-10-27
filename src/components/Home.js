import { Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchFeed } from '../actions'

const EmptyHome = () => {
    return (
        <Box>
            <Text textAlign={'center'}>Your feed is empty</Text>
        </Box>
    )
}

const showFeed = () => {}

const Home = props => {
    console.log('Logging feed from home', props.Feed)
    const { fetchFeed } = props
    useEffect(() => {
        console.log('Fetch feed useEffect ran')
        fetchFeed()
        // fetch the users feed
        // if there is no posts for that user render empty home other wise show all posts as links
    }, [fetchFeed])
    return <Box>Welcome home buddy</Box>
}

const mapStateToProps = state => {
    return { Feed: state.feed }
}

export default connect(mapStateToProps, { fetchFeed })(Home)

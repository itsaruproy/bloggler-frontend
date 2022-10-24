import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProfilePosts } from '../actions'

const ProfilePosts = props => {
    const username = props.match.params.username
    const { fetchProfilePosts } = props

    useEffect(() => {
        fetchProfilePosts(username)
    }, [fetchProfilePosts, username])
    return <div>ProfilePosts</div>
}

const mapStateToProps = state => {
    return { ProfilePosts: state.profilePosts }
}
export default connect(mapStateToProps, { fetchProfilePosts })(ProfilePosts)

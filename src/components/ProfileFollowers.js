import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProfileFollowers } from '../actions'

const ProfileFollowers = props => {
    const username = props.match.params.username
    const { fetchProfileFollowers } = props

    useEffect(() => {
        fetchProfileFollowers(username)
    }, [fetchProfileFollowers, username])
    return (
        <>
            {props.ProfileFollowers.map(post => {
                return <div>This is a follower</div>
            })}
        </>
    )
}

const mapStateToProps = state => {
    return { ProfileFollowers: state.profileFollowers }
}
export default connect(mapStateToProps, { fetchProfileFollowers })(
    ProfileFollowers
)

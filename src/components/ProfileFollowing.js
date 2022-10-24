import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProfileFollowings, tabChange } from '../actions'

const ProfileFollowing = props => {
    const username = props.match.params.username
    const { fetchProfileFollowings, tabChange } = props

    useEffect(() => {
        tabChange(2)
    }, [tabChange])

    useEffect(() => {
        fetchProfileFollowings(username)
    }, [fetchProfileFollowings, username])
    return (
        <>
            {props.ProfileFollowings.map(post => {
                return <div>This is a following</div>
            })}
        </>
    )
}

const mapStateToProps = state => {
    return { ProfileFollowings: state.profileFollowings }
}
export default connect(mapStateToProps, { fetchProfileFollowings, tabChange })(
    ProfileFollowing
)

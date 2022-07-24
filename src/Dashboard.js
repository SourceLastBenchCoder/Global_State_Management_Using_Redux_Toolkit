import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from './userSlice'

function Dashboard() {

    const userName = useSelector((state) => state.user.userName)
    const dispatch = useDispatch()

    return (
        <div>
            <p>Welcome {userName}</p>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default Dashboard
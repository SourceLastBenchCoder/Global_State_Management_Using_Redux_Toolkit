import React, { useState } from 'react'
import { login } from './userSlice'
import { useDispatch } from 'react-redux'

function Login() {
    const [loginUser, setUser] = useState('')
    const dispatch = useDispatch()
    return (
        <div>
            <h5>Login</h5>
            <hr />
            <input type='text' onChange={(e) => setUser(e.target.value)} />
            <br /><br />
            <button onClick={() =>
                dispatch(login({ userName: loginUser }))}>Login</button>
        </div>
    )
}

export default Login
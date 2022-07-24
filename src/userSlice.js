import { createSlice } from "@reduxjs/toolkit";



const UserSlice = createSlice({
    name: 'user',
    initialState: {
        userName: ''
    },
    reducers: {
        login: (state, action) => {
            console.log(action)
            state.userName = action.payload.userName
        },
        logout: (state) => {
            state.userName = ''
        }
    }
})

export const { login, logout } = UserSlice.actions

export default UserSlice.reducer
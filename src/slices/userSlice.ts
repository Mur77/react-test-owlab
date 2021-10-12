import { createSlice } from '@reduxjs/toolkit'
import type { RootStore } from '../store'

interface iUserState {
    loggedIn: boolean
}

const storage = window.localStorage

const initialState: iUserState = {
    loggedIn: !!storage.getItem('react-test-owlab')
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: state => {
            state.loggedIn = true
        },
        logout: state => {
            state.loggedIn = false
        },
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer

export const selectLoggedIn = (state: RootStore) => state.user.loggedIn

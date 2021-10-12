import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStore = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store

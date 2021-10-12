import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { logout } from '../../slices/userSlice'

export const Logout = () => {
    const dispatch = useDispatch()
    const storage = window.localStorage

    useEffect(() => {
        storage.removeItem('react-test-owlab')
        dispatch(logout())
    })

    return (
        <div>Logging out...</div>
    )
}

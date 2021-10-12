import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { logout } from '../../slices/userSlice'

export const Logout = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(logout())
    })

    return (
        <div>Logging out...</div>
    )
}

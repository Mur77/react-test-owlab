import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectLoggedIn } from '../../slices/userSlice'

import styles from './Menu.module.scss'

const menuItems = [
    {
        name: 'Main',
        link: '/',
    },
    {
        name: 'News',
        link: '/news',
    },
    {
        name: 'Profile',
        link: '/profile',
    },
]

export const Menu = () => {
    const logged = useSelector(selectLoggedIn)

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                {menuItems.map((item) => (
                    <Link key={item.name} to={item.link}>{item.name}</Link>
                ))}
                {logged && <Link to='/logout'>Logout</Link>}
            </div>
        </div>
    )
}

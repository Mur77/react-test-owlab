import { Link } from 'react-router-dom'

import styles from './Menu.scss'

const menuItems = [
    {
        name: 'Main',
        link: '/',
    },
    {
        name: 'Views',
        link: '/views',
    },
    {
        name: 'Profile',
        link: '/profile',
    },
    {
        name: 'Login',
        link: '/login',
    },
]

export const Menu = () => {
    return (
        <div className={styles.container}>
            {menuItems.map((item) => (
                <Link to={item.link}>{item.name}</Link>
            ))}
        </div>
    )
}
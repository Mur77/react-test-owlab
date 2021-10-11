import { Menu } from '../components/menu/Menu'

import styles from './CommonLayout.module.scss'

export const CommonLayout: React.FC = ({ children }) => {
    return (
        <div className={styles.container}>
            <Menu />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

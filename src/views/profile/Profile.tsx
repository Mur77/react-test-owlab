import { CommonLayout } from '../../layouts/CommonLayout'

import styles from './Profile.module.scss'

export const Profile = () => {
    return (
        <CommonLayout>
            <div>User Profile</div>
            <div className={styles.container}>
                <img className={styles.image} src="Cat2.jpg" alt="user" />
                <div className={styles.description}>
                    Profile description
                </div>
            </div>
        </CommonLayout>
    )
}

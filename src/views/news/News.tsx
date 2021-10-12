import { CommonLayout } from '../../layouts/CommonLayout'
import { newsData } from './newsData'

import styles from './News.module.scss'

export const News = () => {
    return (
        <CommonLayout>
                <div className={styles.container}>
                {newsData.map((item) => (
                    <div key={item.id} className={styles.newsContainer}>
                        <img className={styles.image} src={item.image} alt="" />
                        <div className={styles.text}>{item.text}</div>
                    </div>
                ))}
            </div>
        </CommonLayout>
    )
}

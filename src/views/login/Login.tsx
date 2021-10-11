import { useState } from 'react'

import { CommonLayout } from '../../layouts/CommonLayout'

import styles from './Login.module.scss'

export const Login = () => {
    const [buttonPressed, setButtonPressed] = useState(false)

    const handleOK = () => {
        if (!buttonPressed) {
            setButtonPressed(true)
            setTimeout(() => {
                setButtonPressed(false)
            }, 200)
        }
    }

    return (
        <CommonLayout>
            <div className={styles.container}>
                <div className={styles.loginWindow}>
                    <div className={styles.title}>Authorization</div>
                    <input className={styles.input} placeholder="Login" />
                    <input className={styles.input} placeholder="Password" type="password" />
                    <div className={styles.buttonContainer}>
                        <button
                            onClick={handleOK}
                            className={`${styles.button} ${buttonPressed && styles.buttonWhite}`}
                        >OK</button>
                    </div>
                </div>
            </div>
        </CommonLayout>
    )
}

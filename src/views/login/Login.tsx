import { useState, useRef } from 'react'

import { CommonLayout } from '../../layouts/CommonLayout'

import styles from './Login.module.scss'

export const Login = () => {
    const [buttonPressed, setButtonPressed] = useState(false)
    const [error, setError] = useState(false)
    const userRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)
    const username = 'Admin'
    const password = '12345'

    const handleOK = () => {
        if (!buttonPressed) {
            setButtonPressed(true)
            setTimeout(() => {
                setButtonPressed(false)
            }, 200)
        }
        if(userRef.current && passRef.current) {
            if (userRef.current.value === username && passRef.current.value === password) {
                console.log('OK')
                setError(false)
            } else {
                setError(true)
            }
        }
    }

    return (
        <CommonLayout>
            <div className={styles.container}>
                <div className={`${styles.loginWindow} ${error && styles.loginWindowWithError}`}>
                    <div className={styles.title}>Authorization</div>
                    {error && (
                        <div className={styles.error}>Incorrect username or password</div>
                    )}
                    <input className={styles.input} placeholder="Login" ref={userRef} />
                    <input className={styles.input} placeholder="Password" type="password" ref={passRef} />
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

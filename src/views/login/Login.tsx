import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import { CommonLayout } from '../../layouts/CommonLayout'
import { login } from '../../slices/userSlice'

import styles from './Login.module.scss'

interface iLogin {
    prevUrl: string
}

export const Login: React.FC<iLogin> = ({ prevUrl }) => {
    const [buttonPressed, setButtonPressed] = useState(false)
    const [error, setError] = useState(false)

    const userRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)

    const dispatch = useDispatch()

    const history = useHistory()

    const username = 'Admin'
    const password = '12345'

    const storage = window.localStorage

    const handleOK = () => {
        if (!buttonPressed) {
            setButtonPressed(true)
            setTimeout(() => {
                setButtonPressed(false)
            }, 200)
        }
        if(userRef.current && passRef.current) {
            if (userRef.current.value === username && passRef.current.value === password) {
                dispatch(login())
                setError(false)
                if (!storage.getItem('react-test-owlab')) {
                    try {
                        storage.setItem('react-test-owlab', '1')
                    } catch {
                        console.log('Unable to store auth info in localStorage')
                    }
                }
                history.replace(prevUrl)
            } else {
                setError(true)
            }
        }
    }

    return (
        <CommonLayout>
            {console.log(prevUrl)}
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

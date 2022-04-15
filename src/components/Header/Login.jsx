import React, { useEffect } from 'react'

import styles from "./Header.module.css"
import { FaUser, FaLock } from "react-icons/fa"

const Login = ({show}) => {


    return (
        <>
            {show && 
                <>
                    <h3 className={styles.title}>Sign In Here!</h3>
                    <p className={styles.desc}>Log into your account in just a few simple steps.</p>
                </>
            }
            <form onSubmit={(e) => e.preventDefault()} action="" id={styles.formLogin} className={styles.form}>
                <div className={styles.formGroup}>
                    <FaUser />
                    <input type="text" name="user name" className={styles.formInput} placeholder="User Name"/>
                </div>
                <div className={styles.formGroup}>
                    <FaLock />
                    <input type="password" name='password' className={styles.formInput} placeholder="Password"/>
                </div>
                <label htmlFor={styles.formCheckBox} className={styles.remember}>
                    <input type="checkbox" className={styles.formCheckbox} id={styles.formCheckbox}/>
                    <span className={styles.checkmark}></span>
                    Remember me
                </label>
                <a href="#">Lost your Password?</a>
                <button className={styles.submit}>SIGN IN</button>
                <p className={styles.desc}>Sign in with Facebook or Google+</p>
            </form>
            <ul className={styles.loginSocialNetworks}>
                <li className={styles.social}><a href="#" style={{backgroundColor: "rgb(59, 89, 152)"}}>FACEBOOK</a></li>
                <li className={styles.social}><a href="#" style={{backgroundColor: "rgb(221, 75, 57)"}}>GOOGLE+</a></li>
            </ul>
        </>
    )
}

export default Login

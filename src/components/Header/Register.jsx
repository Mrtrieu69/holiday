import React, { useEffect, useRef } from 'react'

import styles from "./Header.module.css"
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa"
import Validator from './Validator'

const Register = ({show}) => {

    const formRef = useRef()

    useEffect(() => {
        const formRules = Validator(`#${styles.formRegister}`)

        const getParent = (element, selector) => {
            if(element.matches(`.${selector}`)) return element

            return getParent(element.parentElement, selector)
        }


        const handleValidate = (e) => {
            const rules = formRules[e.target.name]
            let messageError 
            
            for(let i = 0; i < rules.length; i++){
                if(typeof rules[i](e.target.value) === "function"){
                    const password = document.querySelector("[name='password']").value
                    messageError = rules[i](e.target.value)(password)
                }else{
                    messageError = rules[i](e.target.value)
                }
                if(messageError) {
                    const formGroup = getParent(e.target, styles.formGroup)
                    if(formGroup){
                        formGroup.classList.add(styles.error)
                        const messageEl = formGroup.querySelector(`.${styles.errorMessage}`)
                        if(messageEl){
                            messageEl.innerHTML = messageError
                        }
                    }
                    break
                }
            }

            return !messageError
        }

        const handleInput = (e) => {
            const formGroup = getParent(e.target, styles.formGroup)
            const messageEl = formGroup.querySelector(`.${styles.errorMessage}`)
            formGroup.classList.remove(styles.error)
            messageEl.innerHTML = ""
        }

        const inputs = document.querySelectorAll("[name][rules]")

        const handleSubmit = (e) => {
            e.preventDefault()

            var isValid

            for(const input of inputs){
                isValid = handleValidate({target: input})
            }

            if(isValid){
                formRef.current.submit()
            }
        }
    

        inputs.forEach(input => {
            input.addEventListener("blur", handleValidate)
            input.addEventListener("focus", handleInput)
        })

        formRef.current.addEventListener("submit", handleSubmit)

    }, [])

    return (
        <>
            {show && 
                <>
                    <h3 className={styles.title}>Register Now!</h3>
                    <p className={styles.desc}>Join the SetSail community today & set up a free account.</p>
                </>
            }
            <form ref={formRef} action="" id={styles.formRegister} className={styles.form}>
                <div className={styles.formGroup}>
                    <FaUser />
                    <input type="text" name='user name' rules="required" className={styles.formInput} placeholder="User Name"/>
                    <span className={styles.errorMessage}></span>
                </div>
                <div className={styles.formGroup}>
                    <FaEnvelope />
                    <input type="email" name='email' rules="required|email" className={styles.formInput} placeholder="Email"/>
                    <span className={styles.errorMessage}></span>
                </div>
                <div className={styles.formGroup}>
                    <FaLock />
                    <input type="password" name='password' rules="required|min:6" className={styles.formInput} placeholder="Password"/>
                    <span className={styles.errorMessage}></span>
                </div>
                <div className={styles.formGroup}>
                    <FaLock />
                    <input type="password" name='password repeat' rules="required|check" className={styles.formInput} placeholder="Repeat Password"/>
                    <span className={styles.errorMessage}></span>
                </div>
                <button className={styles.submit}>REGISTER</button>
            </form>
        </>
    )
}

export default Register

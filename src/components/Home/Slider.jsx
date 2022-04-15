import React, { useState, useRef, useEffect } from 'react'
import { FaCompass, FaCalendarAlt, FaThumbtack, FaArrowRight, FaArrowLeft } from "react-icons/fa"

import styles from "./Home.module.css"
import { typeSelects, monthSelects } from "./selects"
import showToast from '../../commons/toast'

const backgroundImages = [`url(${require("../../images/far-destinations-slider-img-1.jpg")})`, `url(${require("../../images/far-destinations-slider-img-2.jpg")})`]

const Slider = () => {
    const [month, setMonth] = useState("Month")
    const [showMonth, setShowMonth] = useState(false)
    const [type, setType] = useState("Travel Type")
    const [showType, setShowType] = useState(false)
    const [currentSlider, setCurrentSlider] = useState(0)

    let timeInterval = useRef()
    const btnNext = useRef()
    const toastList = useRef()

    useEffect(() => {
        timeInterval.current = setInterval(() => {
            btnNext.current.click()
        }, 8000)

        return () => clearInterval(timeInterval.current)
    }, [currentSlider])


    const handlePrev = () => {
        setCurrentSlider(prev => {
            prev-- 
            if(prev <= -1){
                prev = backgroundImages.length - 1
            }
            clearInterval(timeInterval.current)
            return prev
        })
    }

    const handleNext = () => {
        setCurrentSlider(prev => {
            prev++
            if(prev >= backgroundImages.length){
                prev = 0
            }
            clearInterval(timeInterval.current)
            return prev
        })
    }


    
    const handleSelectMonth = (select) => {
        setMonth(select)
        setShowMonth(false)
    }

    const handleSelectType = (select) => {
        setType(select)
        setShowType(false)
    }

    const handleForm = (e) => {
        e.preventDefault()
        const div = showToast("info")
        setTimeout(() => {
            div.remove()
        }, 3000)
        toastList.current.append(div)
    }

    return (
        <div id="wrapper" className={styles.wrapper}>
            <ul className={styles.slider}>
                {backgroundImages.map((image, id) => (
                    <li key={id} className={`${styles.slide} ${currentSlider === id ? styles.active : ""}`} style={{backgroundImage: image}}></li>
                ))}
            </ul>
            <div className={styles.search}>
                <div className={styles.header}>
                    <h3 className={styles.title}>Explore and Travel</h3>
                    <p className={styles.desc}>Discover the world today. Find your perfect far destination.</p>
                </div>
                <form action="" onSubmit={handleForm} className={styles.form}>
                    <div className={styles.formGroup}>
                        <FaCompass />
                        <input type="text" className={styles.formInput} name='place' placeholder='Where to?'/>
                    </div>
                    <div className={styles.formGroup}>
                        <FaCalendarAlt />
                        <p onClick={() => setShowMonth(!showMonth)}>{month}</p>
                        <ul className={`${styles.selects} ${showMonth ? styles.active : ""}`}>
                            {monthSelects.map((select, id) => (
                                <li key={id} className={`${styles.select} ${month === select ? styles.active : ""}`} onClick={() => handleSelectMonth(select)}>{select}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.formGroup}>
                        <FaThumbtack />
                        <p onClick={() => setShowType(!showType)}>{type}</p>
                        <ul className={`${styles.selects} ${showType ? styles.active : ""}`}>
                            {typeSelects.map((select, id) => (
                                <li key={id} className={`${styles.select} ${type === select ? styles.active : ""}`} onClick={() => handleSelectType(select)}>{select}</li>
                            ))}
                        </ul>
                    </div>

                    <button className={styles.submit}>FIND NOW</button>
                </form>
            </div>
            <div className={`${styles.btnPrev} ${styles.btn}`} onClick={handlePrev}>
                <FaArrowLeft />
            </div>
            <div ref={btnNext} className={`${styles.btnNext} ${styles.btn}`} onClick={handleNext}>
                <FaArrowRight />
            </div>
            <div ref={toastList} className='fixed top-[12%] right-0 z-[1001]'></div>
        </div>
    )
}

export default Slider

import React, { useRef } from 'react'
import Slider from "react-slick"
import { FaAngleRight, FaAngleLeft} from "react-icons/fa"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css"
import gallery from './gallery';

const Countries = () => {
    const slider = useRef()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true, 
        autoplaySpeed: 3000,
        slidesToShow: 4,
        swipeToSlide: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              swipeToSlide: true,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              swipeToSlide: true,
              initialSlide: 2,
              dots: false
            }
          },
        ]
    };
  

    const handleNext = () => {
        slider.current.slickNext()
    }

    const handlePrev = () => {
        slider.current.slickPrev()
    }

    return (
        <div id="countries" className={styles.countries} style={{backgroundImage: `url(${require("../../images/h-destinations-parallax-1.jpg")})`}}>
            <Slider ref={slider} {...settings} className={styles.gallery}>
                {gallery.map((item, id) => (
                    <div key={id}>
                        <div className={styles.item}>
                            <a href="#" className={styles.link}>
                                <img className={styles.image} src={item.image} style={{borderImage: `url("/images/stamp.png") 18 round`}} alt="Name" />
                                <div className={styles.desc}>
                                    <h3 className={styles.name}>{item.name}</h3>
                                    <span>{item.desc}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
            <div onClick={handlePrev} className={`${styles.btn} ${styles.btnPrev}`}>
                <FaAngleLeft />
            </div>
            <div onClick={handleNext} className={`${styles.btn} ${styles.btnNext}`}>
                <FaAngleRight />
            </div>
        </div>
    )
}

export default Countries

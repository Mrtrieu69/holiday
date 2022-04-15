import React from 'react'
import Slider from "react-slick"
import { FaStar } from "react-icons/fa"

import styles from "./Home.module.css"
import reviews from './reviews'


const Reviews = () => {

    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true, 
        autoplaySpeed: 3000,
        slidesToShow: 3,
        swipeToSlide: true,
        dots: true,
        appendDots: dots => (
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "10px",
                bottom: "-40px"
              }}

            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              swipeToSlide: true,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              swipeToSlide: true,
              initialSlide: 2,
              dots: false
            }
          },
        ]
    };

    return (
        <div id="reviews" className={styles.reviews}>
            <h1 className={styles.title}>Top Reviews</h1>
            <div className={styles.desc}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum.</div>
            <div className={styles.sliderBlock}>
                <Slider {...settings}>
                    {reviews.map((item, id) => (
                        <div key={id}>
                            <div className={styles.card}>
                                <div className={styles.users}>
                                    <img src={item.image} alt="User" />
                                </div>
                                <div className={styles.info}>
                                    <a href="#" className={styles.linkTour}>{item.tour}</a>
                                    <div className={styles.rating}>
                                        {new Array(item.rating).fill().map((_, id) => (
                                            <FaStar key={id}/>
                                        ))}
                                    </div>
                                    <p className={styles.comment}>{item.comment}</p>
                                    <h3 className={styles.name}>{item.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Reviews

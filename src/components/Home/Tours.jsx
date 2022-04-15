import React from 'react'
import { FaStar, FaStarHalfAlt, } from "react-icons/fa"

import styles from "./Home.module.css"

const Tours = () => {
    return (
        <div id="tours" className={styles.tours}>
            <div className="grid-layout">
                <div className="row gutter">
                    <div className="col s-12 md-12 l-4">
                        <a href="#">
                            <div className={styles.tour} style={{backgroundImage: `url(${require("../../images/tour-featured-img-62.jpg")})`}}>
                                <div className={styles.desc}>
                                    <div className={styles.info}>
                                        <h3 className={styles.name}>Bali Lanterns</h3>
                                        <p className={styles.price}>$3000</p>
                                    </div>
                                    <div className={styles.rating}>
                                        <FaStarHalfAlt />
                                        <span>5.3</span>
                                        <span>Good</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col s-12 md-12 l-4">
                        <div className={styles.tour} style={{backgroundImage: `url(${require("../../images/destinations-featured-img-17.jpg")})`}}>
                            <div className={styles.about}>
                                <h3 className={styles.title}>India</h3>
                                <p className={styles.price}>form $1550 to $2200</p>
                                <p className={styles.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos atque eaque porro!</p>
                                <a href="#" className={styles.readMore}>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s-12 md-12 l-4">
                        <a href="#">
                            <div className={styles.tour} style={{backgroundImage: `url(${require("../../images/tour-featured-img-63.jpg")})`}}>
                                <div className={styles.desc}>
                                    <div className={styles.info}>
                                        <h3 className={styles.name}>Island Paradise</h3>
                                        <p className={styles.price}>$3000</p>
                                    </div>
                                    <div className={styles.rating}>
                                        <FaStarHalfAlt />
                                        <span>6.7</span>
                                        <span>Good</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col s-12 md-12 l-4">
                        <div className={styles.tour} style={{backgroundImage: `url(${require("../../images/destinations-featured-img-18.jpg")})`}}>
                            <div className={styles.about}>
                                <h3 className={styles.title}>Indonesia</h3>
                                <p className={styles.price}>form $3000 to $4000</p>
                                <p className={styles.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos atque eaque porro!</p>
                                <a href="#" className={styles.readMore}>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s-12 md-12 l-4">
                        <a href="#">
                            <div className={styles.tour} style={{backgroundImage: `url(${require("../../images/tour-featured-img-64.jpg")})`}}>
                                <div className={styles.desc}>
                                    <div className={styles.info}>
                                        <h3 className={styles.name}>Jungle Adventure</h3>
                                        <p className={styles.price}>$2200</p>
                                    </div>
                                    <div className={styles.rating}>
                                        <FaStar />
                                        <span>7.7</span>
                                        <span>Superb</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col s-12 md-12 l-4">
                        <div className={styles.tour} style={{backgroundImage: `url(${require("../../images/destinations-featured-img-19.jpg")})`}}>
                            <div className={styles.about}>
                                <h3 className={styles.title}>China</h3>
                                <p className={styles.price}>form $1550 to $2100</p>
                                <p className={styles.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos atque eaque porro!</p>
                                <a href="#" className={styles.readMore}>Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tours

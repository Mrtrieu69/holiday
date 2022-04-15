import React from 'react'

import styles from "./Home.module.css"

const Travel = () => {

    return (
        <div id="travel" className={styles.travel}>
            <div className="grid-layout wide">
                <div className={styles.desc}>
                    <h3 className={styles.subTitle}>Choose your</h3>
                    <h1 className={styles.title}>Destination</h1>
                    <p className={styles.info}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quod dolores inventore error quam quae nam omnis, sequi eaque incidunt, exercitationem alias. Amet, pariatur sapiente voluptates maiores dignissimos mollitia quod.</p>
                </div>
                <div className="row big-gutter">
                    <div className="col s-12 md-4 l-4">
                        <a href="#">
                            <div className={styles.tour} style={{backgroundImage: `url(${require("../../images/destinations-featured-img-7-1.jpg")})`}}>
                                <div className={styles.mask}></div>
                                <div className={styles.name}>San Marino</div>
                            </div>
                        </a>
                    </div>
                    <div className="col s-12 md-4 l-4">
                        <a href="#">
                            <div className={styles.tour} style={{backgroundImage: `url(${require("../../images/destinations-featured-img-5.jpg")})`}}>
                                <div className={styles.mask}></div>
                                <div className={styles.name}>Greece</div>
                            </div>
                        </a>
                    </div>
                    <div className="col s-12 md-4 l-4">
                        <a href="#">
                            <div className={styles.tour} style={{backgroundImage: `url(${require("../../images/destinations-featured-img-6.jpg")})`}}>
                                <div className={styles.mask}></div>
                                <div className={styles.name}>Italy</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Travel

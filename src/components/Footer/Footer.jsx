import React, { memo } from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa"

import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="grid-layout wide">
        <div className="row">
          <div className="col s-12 md-6 l-3">
            <div className={styles.company}>
              <a href="#" className={styles.link}>
                <img className={styles.logo} src={require("../../images/logo-vertical.png")} alt="Logo" />
              </a>
              <p className={styles.info}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam praesentium</p>
              <div className={styles.contact}>
                <a href='#' className={styles.contactLink}>
                  <FaEnvelope />
                  <span>setsail@example.com</span>
                </a>
                <a href='#' className={styles.contactLink}>
                  <FaPhoneAlt />
                  <span>+7 902 432 4323</span>
                </a>
                <a href='#' className={styles.contactLink}>
                  <FaMapMarkerAlt />
                  <span>Russia, Saint Petersburg</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col s-12 md-6 l-3">
            <div className={styles.company}>
              <h3 className={styles.title}>Our Recent Posts</h3>
              <div className={styles.ad}>
                <a href='#' className={styles.name}>Visit Thailand, Bali And China</a>
                <a href="#" className={styles.time}>September 7, 2016</a>
              </div>
              <div className={styles.ad}>
                <a href='#' className={styles.name}>The Sound Of Our Jungle</a>
                <a href="#" className={styles.time}>September 7, 2016</a>
              </div>
              <div className={styles.ad}>
                <a href='#' className={styles.name}>New Year, New Resolutions!</a>
                <a href="#" className={styles.time}>September 7, 2016</a>
              </div>
            </div>
          </div>
          <div className="col s-12 md-6 l-3">
            <div className={styles.company}>
              <h3 className={styles.title}>Subscribe to our Newsletter</h3>
              <p>Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</p>
              <form action="" className={styles.form}>
                <div className={styles.formGroup}>
                  <FaUser />
                  <input className={styles.formInput} type="text" placeholder='Name' />
                </div>
                <div className={styles.formGroup}>
                  <FaEnvelope />
                  <input className={styles.formInput} type="text" placeholder='Email' />
                </div>
                <button className={styles.submit}>SUBSCRIBE</button>
              </form>
            </div>
          </div>
          <div className="col s-12 md-6 l-3">
            <div className={styles.company}>
              <h3 className={styles.title}>Our Instagram</h3>
              <p>Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus. Phasellus null</p>
              <div className={styles.instagram}>
                <a href="https://www.instagram.com/p/CQI_F3msJH77_-qGUWPEVj9-XtX2Mt8C6ORaGo0/"  target="_blank" className={styles.instagramLink} style={{backgroundImage: `url(${require("../../images/insta1.jpg")})`}}></a>
                <a href="https://www.instagram.com/p/CPkI1kCMcXESv2cZ04zFmn3aqeCeVl4PkXtODY0/" target="_blank" className={styles.instagramLink} style={{backgroundImage: `url(${require("../../images/insta2.jpg")})`}}></a>
                <a href="https://www.instagram.com/p/CJ1qAAqMXqe6wR5rh0LstosypRPDTf1p4xNOPI0/" target="_blank" className={styles.instagramLink} style={{backgroundImage: `url(${require("../../images/insta3.jpg")})`}}></a>
                <a href="https://www.instagram.com/p/CJhWFs9sDh5xx2aAwbtew_boyRANcAUMjskN180/" target="_blank" className={styles.instagramLink} style={{backgroundImage: `url(${require("../../images/insta4.jpg")})`}}></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)

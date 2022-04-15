import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import styles from "./Header.module.css"
import { FaBars, FaUserCircle } from "react-icons/fa"
import links from "./links"
import SubLinksMobile from './SubLinksMobile'
import Login from './Login'
import Register from './Register'

const NavbarMobile = ({ currentLink, setCurrentLink, resize }) => {
    const [form, setForm] = useState("login")
    const [showModal, setShowModal] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <div className='grid-layout wide'>
                <div className="row row--justify no-gutter">
                    <div className={styles.mobileMenuIcon}>
                        <FaBars onClick={() => setShowMenu(!showMenu)}/>
                    </div>
                    <div className={styles.mobileLogo}>
                        <Link to="/">
                            <img src={require("../../images/logo-mobile-img.png")} alt="" />
                        </Link>
                    </div>
                    <div className={styles.authenticationIcon}>
                        <FaUserCircle onClick={() => setShowModal(!showModal)} />
                    </div>
                </div>
                {/* Modal */}
                <div className={`${styles.modal} ${showModal ? styles.active : ""}`}>
                    <div className={styles.modalLayout} onClick={() => setShowModal(!showModal)} style={{backgroundColor: "rgba(255,255,255,0.8)"}}></div>
                    <div className={`${styles.modalContentMobile} ${resize < 740 ? styles.mobile : ""}`}>
                        <ul className={styles.tablist}>
                            <li className={`${styles.tab} ${form === "login" ? styles.active : ""}`} onClick={() => setForm("login")}>LOGIN</li>
                            <li className={`${styles.tab} ${form === "register" ? styles.active : ""}`} onClick={() => setForm("register")}>REGISTER</li>
                        </ul>
                        <div className={styles.subContent}>
                            {form === "login" ? <Login show={resize > 740} /> : <Register show={resize > 740}/>}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.mobileMenu} ${showMenu ? styles.active : ""}`}>
                <ul className={styles.mobileMenuList}>
                    {links.map((item, id) => (
                        <SubLinksMobile 
                            showMenu={showMenu}
                            setShowMenu={setShowMenu}
                            currentLink={currentLink} 
                            setCurrentLink={setCurrentLink} 
                            key={id} 
                            item={item} 
                            id={id} 
                        />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default NavbarMobile

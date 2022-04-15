import React, { createRef, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { Link, NavLink, useMatch } from "react-router-dom"
import { FaSistrix, FaShoppingBasket, FaBars, FaTimes, FaVk, FaGithubAlt, FaFacebookF, FaInstagram } from "react-icons/fa"

import styles from "./Header.module.css"
import links from "./links"
import Cart from './Cart'
import showToast from '../../commons/toast'

const NavbarComputer = () => {
    const [elRefs, setElRefs] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [showSideMenu, setShowSideMenu] = useState(false)
    const products = useSelector(state => state.cart)

    const isCart = useMatch({path: "/cart"})
    const toastList = useRef()


    useEffect(() => {
        const refs = new Array(links.length).fill().map((_, id) => elRefs[id] || createRef())
        setElRefs(refs)
    }, [])

    useEffect(() => {
        const getParentElement = (element) => {
            if(element.matches(`.${styles.navLink}`)) return element
            return getParentElement(element.parentElement)
        }

        const handleShowSubNav = (e) => {
            const liItem = getParentElement(e.target) 
            const blockSubNavbar = liItem.querySelector(`.${styles.blockSubNavbar}`)
            const subNavbar = liItem.querySelector(`.${styles.subNavbar}`)
            const { height } = subNavbar.getBoundingClientRect()
            blockSubNavbar.style.transition = `height 0.5s ease`
            blockSubNavbar.style.height = `${height}px`
        }

        const handleHideSubNav = (e) => {
            const liItem = getParentElement(e.target) 
            const blockSubNavbar = liItem.querySelector(`.${styles.blockSubNavbar}`)
            blockSubNavbar.style.transition = `height 0.1s ease`
            blockSubNavbar.style.height = 0
        }

        elRefs.map(ref => {
            ref.current.addEventListener("mouseover", handleShowSubNav)
            ref.current.addEventListener("mouseleave", handleHideSubNav)
        })

    }, [elRefs])

    const handleChangeLink = () => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }   

    const handleClickSearch = () => {
        const div = showToast("info")
        setTimeout(() => div.remove(), 3000)
        toastList.current.append(div)
    }
    
    return (
        <div className='grid-layout'>
            <div className="row row--justify no-gutter">
                <div className={styles.logo}>
                    <Link to="/" onClick={handleChangeLink}>
                        <img src={require("../../images/logo-vertical.png")} alt="logo" />
                    </Link>
                </div>
                <ul className={styles.navbar}>
                    {links.map((item, id) => (
                        <li 
                            key={id} 
                            className={`${styles.navLink}`}
                            ref={elRefs[id]}
                        >
                            <NavLink 
                                to={`/${item.link}`} 
                                className={({ isActive }) => (`${isActive ? styles.active : ""} ${styles.link}`)}
                                onClick={handleChangeLink}
                            >
                                <span>{item.linkName}</span>
                            </NavLink>
                            <div className={styles.blockSubNavbar}>
                                <ul className={styles.subNavbar}>
                                    {item.subLinks.map((subItem, id) =>(
                                        <li key={id} className={styles.subNav}>
                                            <a className={styles.subLink} href={subItem.subLink}>
                                                <span>{subItem.subLinkName}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={styles.catalog}>
                    {!isCart?.pathname && 
                        <div className={`${styles.item} ${styles.cart}`}>
                            <div className={styles.iconBlock}>
                                <FaShoppingBasket className={styles.icon}/>
                                {products.length > 0 &&
                                    <div className={styles.iconQuantity}>{products.reduce((result, product) => result + product.quantity, 0)}</div>
                                }
                            </div>
                            <div className={styles.info}>
                                {products.length > 0 ? <Cart onChangeLink={handleChangeLink} products={products}/> : <p className={styles.noProduct}>No products in the cart.</p>}
                            </div>
                        </div>
                    }
                    <div className={styles.item}>
                        <FaSistrix className={styles.icon} onClick={() => setShowModal(!showModal)}/>
                    </div>
                    <div  className={styles.item}>
                        <FaBars className={styles.icon} onClick={() => setShowSideMenu(!showSideMenu)}/>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className={`${styles.modal} ${showModal ? styles.active : ""}`}>
                <div className={styles.modalLayout} style={{ backgroundColor: "rgba(63, 208, 212, 0.7)"}} onClick={() => setShowModal(!showModal)}></div>
                <div className={styles.modalContent}>
                    <input className={styles.search} type="text" placeholder='Search...'/>
                    <button className={styles.submit} onClick={handleClickSearch}>Find now</button>
                </div>
            </div>
            {/* Side-menu */}
            <div className={`${styles.sideMenuLayout} ${showSideMenu ? styles.active : ""}`} onClick={() => setShowSideMenu(!showSideMenu)}></div>
            <div className={`${styles.contentSideMenu} ${showSideMenu ? styles.active : ""}`}>
                <FaTimes className={styles.close} onClick={() => setShowSideMenu(!showSideMenu)}/>
                <img src={require("../../images/logo-vertical.png")} className={styles.logo} alt="logo" />
                <img src={require("../../images/sidearea-img-2.png")} alt="sidearea" />
                <a href="#"><img src={require("../../images/sidearea-img.jpg")} className={styles.map} alt="sidearea" /></a>
                <p style={{textAlign: "center"}}>Lorem ipsum dolor sit amet, consectetuer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis theme natoque</p>                      
                <h3 className={styles.subTitle}>Follow me</h3>  
                <div className={styles.contact}>
                    <a href='https://vk.com/mrtrieu' className={styles.icon}>
                        <FaVk />
                    </a>
                    <a href="https://github.com/Mrtrieu69" className={styles.icon}>
                        <FaGithubAlt />
                    </a>
                    <a href='https://www.facebook.com/trieu.m.tam' className={styles.icon}>
                        <FaFacebookF />
                    </a>
                    <a href='https://www.instagram.com/mrtrieu69/' className={styles.icon}>
                        <FaInstagram />
                    </a>
                </div>                      
            </div>  
            {/* Toast message */}
            <div ref={toastList} className='fixed top-[12%] right-0 z-[1001]'></div>
        </div>
    )
}

export default NavbarComputer

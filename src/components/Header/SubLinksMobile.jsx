import React, { useState, useEffect, createRef, useRef } from 'react'
import { Link } from "react-router-dom"

import styles from "./Header.module.css"
import {  FaAngleRight } from "react-icons/fa"

const SubLinksMobile = ({ item, currentLink, setCurrentLink, setShowMenu }) => {
    const [showSubLinks, setShowSubLinks] = useState(false)

    const getParentElement = (element) => {
        if(element.matches(`.${styles.mobileMenuItemLink}`)) return element
        return getParentElement(element.parentElement)
    }

    const handleSubLinks = (e) => {
        const liItem = getParentElement(e.target)
        const subListBlock = liItem.querySelector(`.${styles.subListBlock}`)
        const subList = liItem.querySelector(`.${styles.subList}`)
        const { height } = subList.getBoundingClientRect()

        if(showSubLinks){
            subListBlock.style.height = 0
        }else{
            subListBlock.style.height = `${height}px`
        }
        setShowSubLinks(!showSubLinks)
    }

    const handleMainSubLink = (linkName) => {
        setCurrentLink(linkName)
        setShowMenu(false)
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }

    return (
        <li onClick={handleSubLinks} className={`${styles.mobileMenuItemLink} ${currentLink === item.linkName ? styles.active : ""}`}>
            <div className={`${styles.mobileMenuLink} ${showSubLinks ? styles.active : ""}`}>
                <span>{item.linkName}</span>
                <FaAngleRight />
            </div>
            <div className={styles.subListBlock}>
                <ul className={styles.subList}>
                    {item.subLinks.map((subItem, id) => (id === 0 ? 
                        <li key={id} className={styles.subItem}>
                            <Link 
                                to={`/${item.link}`} 
                                className={`${styles.subLink} ${styles.active}`}
                                onClick={() => handleMainSubLink(item.linkName)}
                            >
                                {item.linkName}
                            </Link>
                        </li>:
                        <li key={id} className={styles.subItem}><a href={subItem.subLink} onClick={() => setShowMenu(false)} className={styles.subLink}>{subItem.subLinkName}</a></li>
                    ))}
                </ul>
            </div>
        </li>
    )
}

export default SubLinksMobile

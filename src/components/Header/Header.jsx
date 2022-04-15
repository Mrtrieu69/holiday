import React, { useState, memo } from 'react'

import styles from "./Header.module.css"
import NavbarComputer from './NavbarComputer'
import NavbarMobile from './NavbarMobile'

const Header = ({resize}) => {
    const [currentLink, setCurrentLink] = useState("Home")

    return (
        <header className={`${resize < 1024 ? styles.mobile : ""}`}>
            {resize < 1024 ? 
                <NavbarMobile currentLink={currentLink} resize={resize} setCurrentLink={setCurrentLink}/> : 
                <NavbarComputer currentLink={currentLink} setCurrentLink={setCurrentLink}/>
            }
        </header>
    )
}

export default memo(Header)

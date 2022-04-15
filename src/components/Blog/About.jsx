import React from 'react'
import { FaSearch, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa"

import showToast from '../../commons/toast'

const About = ({onSearch}) => {


    return (
        <div id="about" className="blog__about">
            <div className="search">
                <input type="text" className='search__input' placeholder='Search...' />
                <div className="search__icon" onClick={onSearch}>
                    <FaSearch />
                </div>
            </div>
            <div className='user'>
                <h3 className='user__title'>About me</h3>
                <a href="#" className='user__link'>
                    <img src={require("../../images/destionations-sidebar-img.jpg")} className='user__image' alt="" />
                </a>
                <p className='user__comment'>Lorem ipsum dolor sit amet, consect etuiscing elit. In ut ullamcorper leo</p>
            </div>
            <div className="lastPosts">
                <h3 className='lastPosts__title'>Latest Posts</h3>
                <div className='post'>
                    <a href="#">
                        <img src={require("../../images/blog-img-19-150x150.jpg")} alt="" className='post__image'/>
                    </a>
                    <div className='post__link'>
                        <a href="#" className='post__link-name'>Visit Thailand, Bali And China</a>
                        <p className='post__link-time'>September 7, 2016</p>
                    </div>
                </div>
                <div className='post'>
                    <a href="#">
                        <img src={require("../../images/blog-img-2-150x150.jpg")} alt="" className='post__image'/>
                    </a>
                    <div className='post__link'>
                        <a href="#" className='post__link-name'>The Sound Of Our Jungle</a>
                        <p className='post__link-time'>September 7, 2016</p>
                    </div>
                </div>
                <div className='post'>
                    <a href="#">
                        <img src={require("../../images/blog-img-23-150x150.jpg")} alt="" className='post__image'/>
                    </a>
                    <div className='post__link'>
                        <a href="#" className='post__link-name'>New Year, New Resolutions!</a>
                        <p className='post__link-time'>September 7, 2016</p>
                    </div>
                </div>
            </div>
            <div className='tags'>
                <h3 className='tags__title'>Tags</h3>
                <div className="tags__container">
                    <a href="#">
                        <button className='btn-custom'>camera</button>
                    </a>
                    <a href="#">
                        <button className='btn-custom'>city</button>
                    </a>
                    <a href="#">
                        <button className='btn-custom'>fun</button>
                    </a>
                    <a href="#">
                        <button className='btn-custom'>summer</button>
                    </a>
                    <a href="#">
                        <button className='btn-custom'>travel</button>
                    </a>
                    <a href="#">
                        <button className='btn-custom'>winter</button>
                    </a>
                </div>
            </div>
            <div className="follow">
                <h3 className='follow__title'>Follow me</h3>
                <div className='follow__links'>
                    <a href="#" className='follow__link'>
                        <FaTwitter />
                    </a>
                    <a href="#" className='follow__link'>
                        <FaFacebookF />
                    </a>
                    <a href="#" className='follow__link'>
                        <FaLinkedinIn />
                    </a>
                    <a href="#" className='follow__link'>
                        <FaInstagramSquare />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About

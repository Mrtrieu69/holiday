import React, { useEffect, useRef, useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaComment, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagramSquare } from "react-icons/fa"

import "./Blog.scss"
import images from "./images"
import About from './About'
import Comments from './Comments/Comments'

import showToast from '../../commons/toast'

const BlogDetails = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const gallery = useRef()
    const toastList = useRef()

    useEffect(() => {
        gallery.current.style.transform = `translateX(-${currentIndex*100}%)`

    }, [currentIndex]) 

    const handleNext = () => {
        setCurrentIndex(prev => {
            prev++
            if(prev >= images.length){
                prev = 0
            }

            return prev
        })
    }

    const handlePrev = () => {
        setCurrentIndex(prev => {
            prev--
            if(prev <= -1){
                prev = images.length - 1
            }
            return prev
        })
    }
    
    const handleSearch = () => {
        const div = showToast("info")
        setTimeout(() => div.remove(), 3000)
        toastList.current.append(div)
        return
    }

    return (
        <section className='section'>
            <div className="blog">
                <div className='row big-gutter'>
                    <div className="col s-12 md-12 l-9">
                        <div id="blogDetails" className="blog__details">
                            <div className="gallery">
                                <ul ref={gallery} className='gallery__list'>
                                    {images.map((image, id) => (
                                        <li key={id} className='gallery__item' style={{backgroundImage: `url(${image})`}}></li>
                                    ))}
                                </ul>
                                <button  onClick={handleNext} className='gallery__btn gallery__btn--next'>
                                    <FaAngleRight/>
                                </button>
                                <button onClick={handlePrev} className='gallery__btn gallery__btn--prev'>
                                    <FaAngleLeft/>
                                </button>
                                <a className='gallery__link' href="#">
                                    Summer
                                </a>
                            </div>

                            <div className='post'>
                                <h1 className='post__title'>
                                    Travel In Europe
                                </h1>
                                <div className='post__content'>
                                    <p className='post__content-introductory'>Si elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. Tn eam dimo diam ea. Piber Korem sit amet. Cconsequat tin sit, stet cibo blandit.</p>
                                    <p>Al elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. En eam dico similique, ut sint posse sit, eum sumo diam ea. Liber consectetuer in mei, sea in imperdiet assueverit contentiones, an his cibo blandit tacimates. Iusto iudicabit similique id velex, in sea rebum deseruisse appellantur. Lorem ipsum Alienum phaedrum torquatos nec eu, vis detraxit pericu in mei, vix aperiri vix at,dolor sit amet. blandit dicant definition.Sit delicata persequeris ex, in sea rebum deseruisse appellantur. Lorem ipsum dolor sit amet.Eos ei nisl graecis, vix aperiri consequat an. Eius lorem.</p>
                                    <p className='post__content-quote'>“Ei elit omnes impedit ius, vel et hinc agam fabulas. Ut audiamre iracundia vim. An eame, ut sint posse sumo diam ea. Cu omnis.”</p>
                                    <p>Ei elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. An eam dico similique, ut sint posse sit, eum sumo diam ea. Liber consectetuer in mei, sea in imperdiet assueverit contentiones, an his cibo blandit tacimates. Iusto iudicabit similique idefinitionem eos an.Sit delicata persequeris ex, in sea rebum deseruisse appellantur. Lorem ipsum dolor si vix aperiri consequat an.</p>
                                </div>
                                <div className="landscape">
                                    <div className="landscape__small">
                                        <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-25.jpg" alt="" />
                                    </div>
                                    <div className='landscape__large'>
                                        <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-22-1300x650.jpg" alt="" />
                                    </div>
                                </div>
                                <div className='post__content'>
                                    <p>Ai elit omnes lmpedit ius, tel et hinc agam fabulas. Ut audiam invenire iracundia vim. An eam dico similique, ut sint posse sit, eum sumo diam ea. Liber consectetuer in mei, sea in imperdiet assueverit contentiones, an his cibo blandit tacimates. Iusto iudicabit similique idefinitionem eos an.Sit delicata persequeris ex, in sea rebum deseruisse appellantur. Lorem ipsum dolor si vix aperiri consequat an.</p>
                                </div>       
                            </div>
                            
                            <div className="info">
                                <div className='info__block'>
                                    <div className='info__date'>
                                        August 13, 2018
                                    </div>
                                    <a href='#comments' className='info__comment'>
                                        <FaComment />
                                        3 Comments
                                    </a>
                                </div>
                                <div className='info__contact'>
                                    <a className='info__contact-link' href="#">
                                        <FaTwitter className='info__contact-icon'/>
                                    </a>
                                    <a className='info__contact-link' href="#">
                                        <FaFacebookF className='info__contact-icon'/>
                                    </a>
                                    <a className='info__contact-link' href="#">
                                        <FaLinkedinIn className='info__contact-icon'/>
                                    </a>
                                    <a className='info__contact-link' href="#">
                                        <FaInstagramSquare className='info__contact-icon'/>
                                    </a>
                                </div>
                            </div>

                            <div className="author">
                                <div className="author__image">
                                    <img src={require("../../images/author-img.png")} alt="Author" />
                                </div>
                                <div className="author__comment">
                                    <a href="#" className='author__comment-name'>
                                        Nancy Cruz
                                    </a>
                                    <p>Lorem Ipsum dolor sit amet el et hinc agam fabulas. Ut audm invenire iracundia vim. An eam dico que</p>
                                    <div className="author__comment-contact">
                                        <a className='author__comment-link' href="#">
                                            <FaTwitter className='author__comment-icon'/>
                                        </a>
                                        <a className='author__comment-link' href="#">
                                            <FaFacebookF className='author__comment-icon'/>
                                        </a>
                                        <a className='author__comment-link' href="#">
                                            <FaLinkedinIn className='author__comment-icon'/>
                                        </a>
                                        <a className='author__comment-link' href="#">
                                            <FaInstagramSquare className='author__comment-icon'/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="blogRelated">
                                <a href="#" className='blogRelated__link'>
                                    <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-9-150x150.jpg" alt="" className='blogRelated__link-image' />
                                    <div className='blogRelated__link-prev'>
                                        <h3 className='blogRelated__link-name'>Stunning Grennce</h3>
                                        <p>Previous</p>
                                    </div>
                                </a>
                                <a href="#" className='blogRelated__link'>
                                    <div className='blogRelated__link-next'>
                                        <h3 className='blogRelated__link-name'>Lifetime Journey</h3>
                                        <p>Next</p>
                                    </div>
                                    <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/08/blog-img-6-150x150.jpg" alt="" className='blogRelated__link-image' />
                                </a>
                            </div>

                            <Comments />
                        </div>
                    </div>
                    <div className="col s-12 md-12 l-3">
                        <About onSearch={handleSearch}/>
                    </div>
                </div>
            </div>
            {/* Toast message */}
            <div ref={toastList} className='fixed top-[12%] right-0 z-[1001]'></div>
        </section>
    )
}

export default BlogDetails

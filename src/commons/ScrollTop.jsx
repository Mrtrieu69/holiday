import React from 'react'

const ScrollTop = () => {

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div onClick={handleScrollTop} className='scrollTop'>
            TOP
        </div>
    )
}

export default ScrollTop

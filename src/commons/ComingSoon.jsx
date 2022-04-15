import React from 'react'

import "./Commons.scss"

const ComingSoon = () => {
    return (
        <div className='comingSoon'>
            <div className='road'>
                <div className='road__shadow'></div>
                <div className='person'></div>
            </div>
            <div className="title">
                Coming Soon 
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
        </div>
    )
}

export default ComingSoon

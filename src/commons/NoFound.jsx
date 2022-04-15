import React from 'react'

import { Link } from "react-router-dom"

const NoFound = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center" style={{backgroundImage: "url(https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/404-error-page-background-1.jpg)"}}>
            <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/404-error-page-img-1.png" alt="404 Error" />
            <p className='text-white text-lg max-w-[50%] mx-auto text-center mt-4'>Oops! The page you are looking for does not exist. It might have been moved or deleted. Return to our home page.</p>
            <Link to="/">
                <button className='btn-custom mt-10'>Back To Home</button>
            </Link>
        </div>
    )
}

export default NoFound

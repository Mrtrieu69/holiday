import React from 'react'

import { FaRegCalendarAlt, FaUserAlt, FaMapMarkerAlt, FaStar } from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { addProduct } from "../Header/cartSlice"

const TourItem = ({isLoading, index, resize, ...tour}) => {
    const dispatch= useDispatch()
    const { nameTour, hot, desc, people, rating, oldPrice, price, local, grade, duration, image } = tour

    const handleAddToCart = () => {
        const product = {...tour, quantity: 1}
        dispatch(addProduct(product))
    }

    if(isLoading){
        return (
            <div className="w-full md:w-1/2 px-4">
                <div className='rounded shadow-custom relative'>
                    <div className='loader'></div>
                </div>
            </div>
        )
    }

    return (
        <div data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} className="w-full md:w-1/2 px-4">
            <div className='rounded shadow-custom relative'>
                {/* image */}
                <a href='#' className='linkTour' style={{backgroundImage: `url(${image})`}}></a>
                {/* options */}
                <div className="px-4 bg-primary text-white">
                    <ul className='flex'>
                        <li className='py-2.5 px-2 flex gap-x-3 items-center'>
                            <FaRegCalendarAlt />
                            {duration}
                        </li>
                        <li className='py-2.5 px-2 flex gap-x-3 items-center'>
                            <FaUserAlt />
                            {people}+
                        </li>
                        <li className='py-2.5 px-2 flex gap-x-3 items-center'>
                            <FaMapMarkerAlt />
                            <a className='underline-custom' href="#">{local}</a>
                        </li>
                    </ul>
                </div>
                {/* Desc */}
                <div className='py-8 px-6 flex flex-col gap-y-4'>
                    <a href='#' className='text-title cursor-pointer text-xl font-bold hover:text-primary duration-300 ease-in-out'>
                        <h3>{nameTour}</h3>    
                    </a>
                    <p>{desc}</p>
                    <div className='font-semibold flex justify-between'>
                        <span className='flex gap-x-2'>
                            {oldPrice && (
                                <span className='line-through text-footer-text'>${oldPrice}</span>
                            )}
                            ${price}
                        </span>
                        <span className='flex items-center gap-x-2'>
                            <FaStar className='inline-block' />
                            <span>{rating}</span>
                            <span>{grade}</span>
                        </span>
                    </div>
                    {resize > 1024 && 
                        <button 
                            className='bg-primary text-white font-bold mt-6 py-3 px-8 duration-300 ease-in-out hover:bg-[#23a9af]'
                            onClick={handleAddToCart}
                        >
                            ADD TO CART
                        </button>
                    }
                </div>
                {/* Hot */}
                {hot && (
                    <div className='-translate-y-1/2 absolute top-0 right-4  w-12 h-12 rounded-full bg-primary flex justify-center items-center text-white'>
                        <FaStar />
                    </div>
                )}
            </div>
        </div>
    )
}

export default TourItem

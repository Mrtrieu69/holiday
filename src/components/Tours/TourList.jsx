import React, { useEffect, useMemo, useRef, useState } from 'react'

import { FaSortAlphaDown, FaSortAmountUp, FaSortAmountDown, FaRegCalendarAlt, FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import Filter from './Filter'
import TourItem from './TourItem'
import { sortByDate, sortByPriceHightToLow, sortByName, sortByPriceLowToHight } from "./tourSlice"

const TourList = ({resize}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [sortBy, setSortBy] = useState("date")
    const [isLoading, setIsLoading] = useState(false)
    const tours = useSelector(state => state.tours)

    const dispatch = useDispatch()

    const tourListRef = useRef()
    const toastList = useRef()
    let timeRef = useRef()
    const totalPage = Math.ceil(tours.length / 10)

    
    const currentTours = useMemo(() => {
        return [...tours].splice(((currentPage - 1)*10), 10)
    }, [currentPage, tours])

    const handleChangePage = (page) => {
        tourListRef.current.scrollIntoView({block: "start", behavior: "smooth"})
        setCurrentPage(page)
    }

    const handleSortByDate = (value) => {
        setIsLoading(true)
        setSortBy(value)
        setCurrentPage(1)
        if(timeRef.current){
            clearTimeout(timeRef.current)
        }
        timeRef.current = setTimeout(() => {
            setIsLoading(false)
            dispatch(sortByDate())
        }, 2000)
    }
    const handleSortByPriceLowToHight = (value) => {
        setIsLoading(true)
        setSortBy(value)
        setCurrentPage(1)
        if(timeRef.current){
            clearTimeout(timeRef.current)
        }
        timeRef.current = setTimeout(() => {
            setIsLoading(false)
            dispatch(sortByPriceLowToHight())
        }, 2000)
    }
    const handleSortByPriceHightToLow = (value) => {
        setIsLoading(true)
        setSortBy(value)
        setCurrentPage(1)
        if(timeRef.current){
            clearTimeout(timeRef.current)
        }
        timeRef.current = setTimeout(() => {
            setIsLoading(false)
            dispatch(sortByPriceHightToLow())
        }, 2000)
    }
    const handleSortByName = (value) => {
        setIsLoading(true)
        setSortBy(value)
        setCurrentPage(1)
        if(timeRef.current){
            clearTimeout(timeRef.current)
        }
        timeRef.current = setTimeout(() => {
            setIsLoading(false)
            dispatch(sortByName())
        }, 2000)
    }

    useEffect(() => {
        handleSortByDate("date")
    }, [])

    return (
        <div className='bg-[#f3f3f3] '>
            {/* List */}
            <div ref={tourListRef} id="tourList" className="w-90% mx-auto bg-white -translate-y-[80px]">
                {/* Sort */}
                <ul className='flex flex-col flex-wrap md:flex-row justify-start bg-[#f3f3f3]'>
                    <li 
                        className={`flex items-center gap-x-3 py-7 px-5 md:px-7 lg:px-10 font-medium cursor-pointer hover:text-primary duration-300 ease-in-out ${sortBy === "date" ? "bg-white text-primary " : "text-title"}`}
                        onClick={() => handleSortByDate("date")}
                    >
                        <FaRegCalendarAlt />
                        DATE
                    </li>
                    <li 
                        className={`flex items-center gap-x-3 py-7 px-5 md:px-7 lg:px-10 font-medium cursor-pointer hover:text-primary duration-300 ease-in-out ${sortBy === "priceLowToHight" ? "bg-white text-primary " : "text-title"}`}
                        onClick={() => handleSortByPriceLowToHight("priceLowToHight")}
                    >
                        <FaSortAmountUp />
                        PRICE LOW TO HIGHT
                    </li>
                    <li 
                        className={`flex items-center gap-x-3 py-7 px-5 md:px-7 lg:px-10 font-medium cursor-pointer hover:text-primary duration-300 ease-in-out ${sortBy === "priceHightToLow" ? "bg-white text-primary " : "text-title"}`}
                        onClick={() => handleSortByPriceHightToLow("priceHightToLow")}
                    >
                        <FaSortAmountDown />
                        PRICE HIGHT TO LOW
                    </li>
                    <li 
                        className={`flex items-center gap-x-3 py-7 px-5 md:px-7 lg:px-10 font-medium cursor-pointer hover:text-primary duration-300 ease-in-out ${sortBy === "name" ? "bg-white text-primary " : "text-title"}`}
                        onClick={() => handleSortByName("name")}
                    >
                        <FaSortAlphaDown />
                        NAME(A-Z)
                    </li>
                </ul>
                {/* product & Filter*/}
                <div className='p-8 lg:p-12 flex flex-col lg:flex-row -mx-6'>
                    {/* Product */}
                    <div className=' w-full lg:w-3/4 px-6 pb-20'>
                        <div className="flex flex-wrap gap-y-8 -mx-4">
                            {currentTours.map((tour, id) => <TourItem resize={resize} key={tour.id} index={id} isLoading={isLoading} {...tour}/>)}
                        </div>
                        {/* pagination */}
                        <div className='mt-16'>
                            <ul className='flex gap-x-2 justify-center items-center'>
                                {currentPage !== 1 && (
                                    <li 
                                        className='px-2 cursor-pointer hover:text-primary duration-300 ease-in-out'
                                        onClick={() => handleChangePage(currentPage - 1)}
                                    ><FaAngleLeft /></li>
                                )}
                                {new Array(totalPage).fill().map((_, id) => (
                                    <li 
                                        key={id} 
                                        className={`${currentPage !== id + 1 ? 
                                            "px-2 cursor-pointer text-footer-text hover:text-title duration-300 ease-in-out" 
                                            : 
                                            "px-2 cursor-text text-title "
                                        }`}
                                        onClick={() => handleChangePage(id+1)}
                                    >
                                        {id+1}
                                    </li>
                                ))}
                                {currentPage !== totalPage && (
                                    <li 
                                        className='px-2 cursor-pointer hover:text-primary duration-300 ease-in-out'
                                        onClick={() => handleChangePage(currentPage + 1)}
                                    ><FaAngleRight /></li>
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* Filter */}
                    <div className='w-full lg:w-1/4 px-6'>
                        <Filter toastList={toastList} />
                    </div>
                </div>
            </div>
            {/* Toast message */}
            <div ref={toastList} className='fixed top-[12%] right-0 z-[1001]'></div> 
        </div>
    )
}

export default TourList

import React, { useEffect, useMemo, useRef, useState } from 'react'

import { FaSistrix, FaCompass, FaRegCalendarAlt} from "react-icons/fa"
import showToast from '../../commons/toast'

const Filter = ({toastList}) => {
    const [showSelectItems, setShowSelectItems] = useState(false)
    const [valueSelect, setValueSelect] = useState("January")
    const [priceMin, setPriceMin] = useState(0)
    const [priceMax, setPriceMax] = useState(3600)

    const minInput = useRef()
    const maxInput = useRef()
    const sliderRange = useRef()
    const priceGap = 500

    useEffect(() => {
        const handleInput = () => {
            sliderRange.current.style.left = `${(priceMin / minInput.current.max) * 100}%` 
            sliderRange.current.style.right = `${100 -((priceMax / maxInput.current.max) * 100)}%` 
        }

        minInput.current.addEventListener("input", handleInput)
        maxInput.current.addEventListener("input", handleInput)
        minInput.current.addEventListener("change", handleInput)
        maxInput.current.addEventListener("change", handleInput)

    }, [priceMin, priceMax])


    const selectItems = useMemo(() => 
        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    , [])

    const handleSelect = (value) => {
        setValueSelect(value)
        setShowSelectItems(false)
    }

    const handleRangeInput = (e) => {
        if(e.target.matches(".price-min")){
            if(priceMax - e.target.value < priceGap) return
            setPriceMin(e.target.value)
        }else{
            if(e.target.value - priceMin < priceGap) return
            setPriceMax(e.target.value)
        }
    }

    const handleClickSearch = () => {
        const div = showToast("info")
        setTimeout(() => div.remove(), 3000)
        toastList.current.append(div)
    }

    return (
        <div data-aos="fade-up" id="filter" className='bg-primary px-5 py-20 text-white'>
            <h2 className='text-2xl font-bold'>Plan Your Trip</h2>
            <p>It’s time to plan just the perfect vacation!</p>
            <form onSubmit={(e) => e.preventDefault()} action="" className='my-5 flex flex-col gap-y-1.5'>
                <div className='bg-[#6fdcdf] py-4 px-6 flex justify-center items-center gap-x-2'>
                    <FaSistrix className='flex-grow'/>
                    <input className='w-full placeholder:text-white' type="text" placeholder='Search Tour' />
                </div>
                <div className='bg-[#6fdcdf] py-4 px-6 flex justify-center items-center gap-x-2'>
                    <FaCompass className='flex-grow'/>
                    <input className='w-full placeholder:text-white' type="text" placeholder='Where To?' />
                </div>
                <div className='bg-[#6fdcdf] py-4 px-6 flex justify-center items-center gap-x-2 relative'>
                    <FaRegCalendarAlt className='flex-grow'/>
                    <div onClick={() => setShowSelectItems(!showSelectItems)} className='w-full cursor-text'>
                        {valueSelect}
                    </div>
                    <ul className={`${showSelectItems ? "" : "hidden"} z-10 absolute left-0 top-100% pl-6 max-h-[200px] overflow-y-scroll bg-white w-full text-text`}>
                        {selectItems.map((item, id) => (
                            <li 
                                key={id} 
                                className={`${valueSelect === item ? "text-primary" : ""} py-2 hover:text-primary duration-300 ease-in-out cursor-pointer`}
                                onClick={() => handleSelect(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div></div>
                </div>
                {/* Filter by price */}
                <h3 className='text-xl font-bold pt-10'>Filter by price</h3>
                <div className='mt-5 relative h-6'>
                    {/* range */}
                    <div className='absolute top-0 left-0 w-full h-full bg-primary-dark'>
                        <div ref={sliderRange} className="absolute top-0 h-full left-0 right-0 bg-gray-300"></div>
                    </div>
                    {/* input */}
                    <div className='absolute inset-0'>
                        <input ref={minInput} className='price-min' type="range" value={priceMin} onChange={handleRangeInput} min="0" max="3600" step="10" />
                        <input ref={maxInput} className='price-max' type="range" value={priceMax} onChange={handleRangeInput} min="0" max="3600" step="10" />
                    </div>
                </div>
                <div>{`Price: $${priceMin} - $${priceMax}`}</div>
                {/* Select */}
                <ul className='py-8 flex flex-col gap-y-1'>
                    <li className='flex gap-x-2 items-center'>
                        <input id="Popular" className='hidden' type="checkbox" /> 
                        <label className='cursor-pointer' htmlFor="Popular">
                            <span className='
                                inline-block relative w-3 h-3 rounded-full bg-white mr-2
                                after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full
                                '
                            ></span>
                            Popular
                        </label>
                    </li>
                    <li className='flex gap-x-2 items-center'>
                        <input id="NY" className='hidden' type="checkbox" /> 
                        <label className='cursor-pointer' htmlFor="NY">
                            <span className='
                                inline-block relative w-3 h-3 rounded-full bg-white mr-2
                                after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full
                                '
                            ></span>
                            NY
                        </label>
                    </li>
                    <li className='flex gap-x-2 items-center'>
                        <input id="Skiing" className='hidden' type="checkbox" /> 
                        <label className='cursor-pointer' htmlFor="Skiing">
                            <span className='
                                inline-block relative w-3 h-3 rounded-full bg-white mr-2
                                after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full
                                '
                            ></span>
                            Skiing
                        </label>
                    </li>
                    <li className='flex gap-x-2 items-center'>
                        <input id="Europe" className='hidden' type="checkbox" /> 
                        <label className='cursor-pointer' htmlFor="Europe">
                            <span className='
                                inline-block relative w-3 h-3 rounded-full bg-white mr-2
                                after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full
                                '
                            ></span>
                            Europe
                        </label>
                    </li>
                    <li className='flex gap-x-2 items-center'>
                        <input id="China" className='hidden' type="checkbox" /> 
                        <label className='cursor-pointer' htmlFor="China">
                            <span className='
                                inline-block relative w-3 h-3 rounded-full bg-white mr-2
                                after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full
                                '
                            ></span>
                            China
                        </label>
                    </li>
                    <li className='flex gap-x-2 items-center'>
                        <input id="Latest" className='hidden' type="checkbox" /> 
                        <label className='cursor-pointer' htmlFor="Latest">
                            <span className='
                                inline-block relative w-3 h-3 rounded-full bg-white mr-2
                                after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full
                                '
                            ></span>
                            Latest
                        </label>
                    </li>
                    <li className='flex gap-x-2 items-center'>
                        <input id="Wines" className='hidden' type="checkbox" /> 
                        <label className='cursor-pointer' htmlFor="Wines">
                            <span className='
                                inline-block relative w-3 h-3 rounded-full bg-white mr-2
                                after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full
                                '
                            ></span>
                            Wines
                        </label>
                    </li>
                </ul>
                <button onClick={handleClickSearch} className='py-3 text-sm font-bold text-center text-title bg-white hover:text-white hover:bg-[#23a9af] duration-300 ease-in-out'>
                    SEARCH
                </button>
            </form>
        </div>
    )
}

export default Filter

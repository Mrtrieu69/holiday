import React, { useState, memo } from 'react'

import relatedList from "./relatedList"

const Related = () => {
    const [active, setActive] = useState(false)
    return (
        <div className={`related ${active ? "active" : ""}`}>
            {/* Content */}
            <div className="w-full bg-white flex flex-col h-full relative z-[901]">
                <div className='px-7 py-4 h-full grow overflow-y-auto'>
                    <a href='#' className="">
                        <img src={require("../../images/logo-qode.png")} alt="" />
                    </a>
                    <h3 className='font-semibold text-sm my-4'>RELATED THEMES</h3>
                    <ul>
                        {relatedList.map((item, id) => (
                            <li key={id} className='py-2.5'>
                                <a href={item.link} target="_blank" rel="noreferrer" className='block hover:opacity-[0.8] duration-100 ease-in'>
                                    <img src={item.image} alt="Theme" />
                                    <h4 className='text-sm py-1'>{item.name}</h4>
                                    <div className='flex justify-between items-center'>
                                        <p className='font-medium  text-[10px] text-footer-text'>{item.category}</p>
                                        <p className='font-semibold text-sm'>${item.price}</p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <a href='https://qodeinteractive.com/' rel="noreferrer" target="_blank" className='bg-related text-center text-[12px] font-semibold text-white cursor-pointer py-3'>VIEW ALL QODE THEMES</a>
            </div>
            {/* Mark */}
            <div onClick={() => setActive(!active)} className={`mark text-white text-md font-bold flex items-center ${active ? "active justify-start" : "justify-center"}`}>
                {active ? (
                    <div>
                        <svg width="32" height="32" viewBox="0 0 32 32" style={{fill: "#fff",height: "20px"}}>
                            <path d="M 4,15C 4,15.552, 4.448,16, 5,16l 19.586,0 l-4.292,4.292c-0.39,0.39-0.39,1.024,0,1.414 c 0.39,0.39, 1.024,0.39, 1.414,0l 6-6c 0.092-0.092, 0.166-0.202, 0.216-0.324C 27.972,15.26, 28,15.132, 28,15.004c0-0.002,0-0.002,0-0.004 l0,0c0-0.13-0.026-0.26-0.078-0.382c-0.050-0.122-0.124-0.232-0.216-0.324l-6-6c-0.39-0.39-1.024-0.39-1.414,0 c-0.39,0.39-0.39,1.024,0,1.414L 24.586,14L 5,14 C 4.448,14, 4,14.448, 4,15z"></path>
                        </svg>
                    </div>
                ) : (
                    <div className='flex w-full text-[12px] items-center justify-between px-2'>
                        <span>
                            <svg x="0px" y="0px" viewBox="0 0 87 87" style={{fill: "#fff",height: "26px"}}>
                                <path d="M55.4,81.5c6.1-11.1,5.2-16.1-4.3-24.3c6.1-3.5,9.5-8.5,9.1-15.7c-0.5-8.2-7.7-14.7-16.3-14.6
                                    c-8.5,0.1-15.6,6.7-15.9,15c-0.3,8.5,5.9,15.8,14.3,16.6c1.4,0.1,2.8,0.2,4.2,0.5c5.9,1.2,10.2,6.7,9.8,12.6
                                    c-0.4,6.4-5.5,11.4-11.8,11.7C24.9,84.2,5.9,68.5,3.2,49.3C-0.1,26.9,14.4,6.8,36.4,2.8c22.3-4,43.4,10,48.1,32
                                    c4.3,20-8.6,41.2-28.4,46.7C55.9,81.5,55.6,81.5,55.4,81.5z">
                                        
                                    </path>
                            </svg>
                        </span>
                        <span>
                            RELATED
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default memo(Related)

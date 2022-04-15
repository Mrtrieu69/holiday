import React from 'react'

const Wrapper = ({cartDetails, blog}) => {

  if(cartDetails){
    return (
      <div id='wrapper' className='pt-100% md:pt-1/3 bg-center bg-no-repeat bg-cover relative' style={{backgroundImage: `url(${require("../../images/shop-title-img-1.jpg")})`}}>
          <div className="text-center absolute inset-0 flex justify-center items-center lg:text-6xl md:text-5xl text-4xl font-bold text-white animate-fade-up-title">
              Cart
          </div>
      </div>
    )
  }

  if(blog){
    return (
      <div id='wrapper' className='pt-100% md:pt-1/3 bg-center bg-no-repeat bg-cover relative' style={{backgroundImage: `url(${require("../../images/blog-title-img-2.jpg")})`}}>
          <div className="text-center absolute inset-0 flex justify-center items-center lg:text-6xl md:text-5xl text-4xl font-bold text-white animate-fade-up-title">
              Blog
          </div>
      </div>
    )
  }

  return (
    <div id='wrapper' className='pt-100% md:pt-1/3 bg-center bg-no-repeat bg-cover relative' style={{backgroundImage: `url(${require("../../images/tour-list-title-img.jpg")})`}}>
        <div className="text-center absolute inset-0 flex justify-center items-center lg:text-6xl md:text-5xl text-4xl font-bold text-white animate-fade-up-title">
            Tours Search Page
        </div>
    </div>
  )
}

export default Wrapper

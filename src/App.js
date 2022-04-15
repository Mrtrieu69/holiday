import React, { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"

import { Header, Footer, Home, Destinations, Blog, Shop, Tours, Pages, CartDetails } from "./components"
import NoFound from './commons/NoFound';
import ScrollTop from './commons/ScrollTop';
import Related from "./commons/Related/Related"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
  offset: 0,
});


const App = () => {
  const [scrollY, setScrollY] = useState(0)
  const [resize, setResize] = useState(0)

  useEffect(() => {
    const handleResize = () => setResize(window.innerWidth)

    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("scroll", handleScroll)

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="app">
      <Header resize={resize}/>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home resize={resize}/>}></Route>
          <Route path="/pages" element={<Pages />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/tours" element={<Tours resize={resize}/>}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/destinations" element={<Destinations />}></Route>
          <Route path="/cart" element={<CartDetails />}></Route>
          <Route path="/:notfound" element={<NoFound />}></Route>
        </Routes>
      </div>
      <Related />
      {scrollY >= 700 && <ScrollTop />}
      <Footer /> 
    </div>
  )
}

export default App

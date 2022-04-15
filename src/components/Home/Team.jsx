// import React, { useEffect, useRef, useState } from 'react'
// import { FaAngleRight, FaAngleLeft} from "react-icons/fa"

// import styles from "./Home.module.css"
// import members from "./members"

// const Team = ({ resize }) => {
//   const [currentIndex, setCurrentIndex] = useState(1)
//   const listMembers = useRef() 

//   useEffect(() => {
//     if(resize >= 1024){
//       listMembers.current.style.transform = `translateX(-${100*currentIndex}%)`
//     } else{
//       listMembers.current.style.transform = `translateX(0)`
//     }

//   }, [resize, currentIndex])

//   useEffect(() => {
//     const handleLoop = () =>{
//       if(currentIndex >= members.length - 1){
//         listMembers.current.style.transition = `none`
//         setCurrentIndex(1)
//       }else if(currentIndex <= 0){
//         listMembers.current.style.transition = `none`
//         setCurrentIndex(members.length - 2)
//       }
//     }
    
//     listMembers.current.addEventListener("transitionend", handleLoop)
//   }, [currentIndex])


//   const handleNext = () => {
//     setCurrentIndex(prev => {
//       prev++
//       listMembers.current.style.transition = "transform 0.3s ease"
//       // clearInterval(timeInterval.current)
//       return prev
//     })
//   }

//   const handlePrev = () => {
//     setCurrentIndex(prev => {
//       prev--
//       listMembers.current.style.transition = "transform 0.3s ease"
//       // clearInterval(timeInterval.current)
//       return prev
//     })
//   }

//   return (
//     <div id="team" className={styles.team}>
//       <div className={styles.blockMembers}>
//         <ul ref={listMembers} className={styles.members}>
//           {members.map((item, id) => (
//             <li key={id}  style={{display: `${((resize < 1024 && id === 0) || (resize < 1024 && id === members.length -1)) ? "none" : "flex"}`}} className={styles.member}>
//               <img className={styles.image} src={item.image} alt="Member" />
//               <p className={styles.slogan}>{item.slogan}</p>
//               <p className={styles.name}>{item.name}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div onClick={handlePrev} className={`${styles.btn} ${styles.btnPrev}`}>
//         <FaAngleLeft />
//       </div>
//       <div onClick={handleNext} className={`${styles.btn} ${styles.btnNext}`}>
//         <FaAngleRight />
//       </div>
//     </div>
//   )
// }

// export default Team




import React, { useRef } from 'react'
import { FaAngleRight, FaAngleLeft} from "react-icons/fa"
import Slider from "react-slick"

import styles from "./Home.module.css"
import members from "./members"

const Team = ({ resize }) => {

  const slider = useRef()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleNext = () => {
    slider.current.slickNext()
  }

  const handlePrev = () => {
    slider.current.slickPrev()
  }

  return (
    <div>
      <div id="team" className={styles.team}>
          <Slider ref={slider} {...settings} className={styles.blockMembers} >
            {members.map((item, id) => (
              <div key={id}>
                <div className={styles.member}>
                  <img className={styles.image} src={item.image} alt="Member" />
                  <p className={styles.slogan}>{item.slogan}</p>
                  <p className={styles.name}>{item.name}</p>
                </div>
              </div>
            ))}
          </Slider>
          {resize > 1024 && (
            <>
              <button onClick={handleNext} className={`${styles.btn} ${styles.btnNext}`}>
                <FaAngleRight />
              </button>
              <button onClick={handlePrev} className={`${styles.btn} ${styles.btnPrev}`}>
                <FaAngleLeft />
              </button>
            </>
          )}
      </div>
    </div>
  )
}

export default Team

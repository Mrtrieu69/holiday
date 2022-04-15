import React, { memo } from 'react'

import Slider from './Slider.jsx'
import Travel from './Travel.jsx'
import Tours from './Tours.jsx'
import Team from './Team.jsx'
import Countries from './Countries.jsx'
import Reviews from './Reviews.jsx'

const Home = ({resize}) => {

  return (
    <>
      <Slider />
      <Travel />
      <Tours />
      <Team resize={resize}/>
      <Countries />
      <Reviews />
    </>
  )
}

export default memo(Home)

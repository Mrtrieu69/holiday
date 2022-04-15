import React, {memo} from 'react'

import Wrapper from "./Wrapper.jsx"
import TourList from './TourList.jsx'

const Tours = ({resize}) => {

  return (
    <>
      <Wrapper />
      <TourList resize={resize}/>
    </>
  )
}

export default memo(Tours)

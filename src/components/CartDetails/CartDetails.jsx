import React, {memo} from 'react'

import Wrapper from '../Tours/Wrapper'
import Products from "./Products"

const Cart = () => {
  return (
    <>
        <Wrapper cartDetails/>
        <Products />
    </>
  )
}

export default memo(Cart)

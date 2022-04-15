import React, { memo } from 'react'

import Wrapper from "../Tours/Wrapper"
import BlogDetails from './BlogDetails'

const Blog = () => {
  return (
    <>
      <Wrapper blog/>
      <BlogDetails />
    </>
  )
}

export default memo(Blog)

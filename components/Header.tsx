

import React from 'react'
import { HorizontalScroll, Navbar } from '.'

const Header = () => {
  return (
    <div className='flex-1 flex-col'>
      <HorizontalScroll />
      <Navbar />
    </div>
  )
}

export default Header



import React from 'react'
import { HorizontalScroll, Navbar } from '.'

const Header = () => {
  return (
    <header className='flex-1 flex-col'>
      <HorizontalScroll />
      <Navbar />
    </header>
  )
}
export default Header

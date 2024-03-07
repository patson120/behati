

import { HorizontalScroll, Navbar } from '.'

const Header = () => {
  return (
    <header className='flex-1 flex-coL fixed top-0 left-0 right-0 z-[99999] shadow-2xl'>
      <HorizontalScroll />
      <Navbar />
    </header>
  )
}
export default Header

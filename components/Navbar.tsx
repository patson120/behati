
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CustomButton } from '.'
import { MouseEvent } from 'react'

const Navbar = () => {

  const handleClick = () => {
    console.log("handleClick");
  }

  const openMenu = (event: MouseEvent<HTMLButtonElement>) => {
    var menu = document.querySelector("#mobile-menu")
    menu?.classList.remove("hide_menu")
    menu?.classList.add("show_menu")
  }

  const closeMenu = () => {
    var menu = document.querySelector("#mobile-menu")
    menu?.classList.remove("show_menu")
    menu?.classList.add("hide_menu")
  }

  globalThis?.window?.addEventListener("resize", (event: Event) => {
    if (window.innerWidth > 1024) {
      closeMenu()
    }
  })

  return (
    <nav className="bg-white relative">
      <div className="container h-20 justify-center items-center">
        <div className="relative flex h-16 items-center justify-between ">
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <button
              onClick={openMenu}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              {/* Icon when menu is closed. */}

              {/* Menu open: "hidden", Menu closed: "block" */}

              <svg className="block h-8 w-8" fill="none" viewBox="0 0 20 20" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              {/* Icon when menu is open. */}

              {/* Menu open: "block", Menu closed: "hidden" */}

              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 mt-1 w-full justify-between items-center max-lg:items-stretch">
            <div className="flex flex-shrink-0 items-center sm:w-24">
              <Link href="/">
                <Image
                  width="100"
                  height={50}
                  className="h-8 w-auto"
                  src="/assets/images/Behati-logo.png"
                  alt="Behati logo" /></Link>
            </div>
            <div className="hidden lg:ml-0 lg:block">
              <div className="flex space-x-1 lg:space-x-4">
                <Link href="/" className="nav_item_menu" aria-current="page">Accueil</Link>
                <Link href="/produits" className="nav_item_menu">Nos produits</Link>
                <Link href="/points-vente" className="nav_item_menu">Points de vente</Link>
                <Link href="/a-propos" className="nav_item_menu">A propos</Link>
                <Link href="/contact" className="nav_item_menu">Contact</Link>
              </div>
            </div>
            <CustomButton
              title='Commander'
              containerStyle='black_bgcolor hidden lg:block h-9 rounded-full text-white text-sm font-bold px-4'
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state.  */}
      <div className="lg:hidden hide_menu" id="mobile-menu">
        <div className="h-full space-y-2 px-3 pb-3 pt-2 flex flex-1 flex-col justify-between">
          <div className='flex justify-between items-center border-b-[1.5px] pb-5'>
            <Link href="/">
              <Image
                width={50}
                height={50}
                className="h-8 w-auto"
                src="/assets/images/Behati-logo.png"
                alt="Behati logo" /></Link>
            <svg
              onClick={closeMenu}
              className="mb-2 h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className='space-y-4 flex flex-col pb-5'>
            <Link href="/"
              onClick={closeMenu}
              className="nav_item_menu flex flex-row justify-between items-center border-b-[1.5px] border-gray-300" aria-current="page">
              <p>Accueil</p>
              <Image
                width={40}
                height={40}
                className="h-5 w-auto opacity-40"
                src="/assets/icons/arrow-up-right.png"
                alt="Icon" />
            </Link>
            <Link href="/produits"
              onClick={closeMenu}
              className="nav_item_menu flex flex-row justify-between items-center border-b-[1.5px] border-gray-300" aria-current="page">
              <p>Nos produits</p>
              <Image
                width={40}
                height={40}
                className="h-5 w-auto opacity-40"
                src="/assets/icons/arrow-up-right.png"
                alt="Icon" />
            </Link>
            <Link href="/points-vente"
              onClick={closeMenu}
              className="nav_item_menu flex flex-row justify-between items-center border-b-[1.5px] border-gray-300" aria-current="page">
              <p>Points de vente</p>
              <Image
                width={40}
                height={40}
                className="h-5 w-auto opacity-40"
                src="/assets/icons/arrow-up-right.png"
                alt="Icon" />
            </Link>

            <Link href="/a-propos"
              onClick={closeMenu}
              className="nav_item_menu flex flex-row justify-between items-center border-b-[1.5px] border-gray-300" aria-current="page">
              <p>A propos</p>
              <Image
                width={40}
                height={40}
                className="h-5 w-auto opacity-40"
                src="/assets/icons/arrow-up-right.png"
                alt="Icon" />
            </Link>

            <Link href="/contact"
            onClick={closeMenu}
            className="nav_item_menu flex flex-row justify-between items-center border-b-[1.5px] border-gray-300" aria-current="page">
              <p>Contact</p>
              <Image
                width={40}
                height={40}
                className="h-5 w-auto opacity-40"
                src="/assets/icons/arrow-up-right.png"
                alt="Icon" />
            </Link>
            <CustomButton
              title='Commander'
              containerStyle='black_bgcolor hidden lg:block rounded-full text-white text-sm font-bold px-4 py-2'
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>


    </nav>
  )
}

export default Navbar

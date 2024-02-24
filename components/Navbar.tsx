
import Image from 'next/image'
import Link from 'next/link'
import { CustomButton } from '.'

const Navbar = () => {

  const handleClick = () => {
    console.log("handleClick");
  }
  return (
    <nav className="bg-white">
      <div className="container h-20 justify-center items-center">
        <div className="relative flex h-16 items-center justify-between">
          {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            Mobile menu button
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              Icon when menu is closed.

              Menu open: "hidden", Menu closed: "block"

              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-Wdth={1.5} stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              Icon when menu is open.

              Menu open: "block", Menu closed: "hidden"

              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-Wdth={1.5} stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div> */}
          <div className="flex flex-1 mt-1 flex-shrink-0 w-full justify-between items-center sm:items-stretch">
            {/* <div className="sm:justify-start"> */}
            <div className="flex flex-shrink-0 items-center sm:w-24">
              <Image
                width="100"
                height={50} className="h-8 w-auto" src="/assets/images/Behati-logo.png" alt="Behati logo" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link href="#" className="nav_item_menu" aria-current="page">ACCUEIL</Link>
                <Link href="#" className="nav_item_menu">NOS PRODUITS</Link>
                <Link href="#" className="nav_item_menu">POINTS DE VENTE</Link>
                <Link href="#" className="nav_item_menu">A PROPOS</Link>
                <Link href="#" className="nav_item_menu">CONTACT</Link>
              </div>
            </div>
            <CustomButton
              title='Contactez-nous'
              containerStyle='black_bgcolor h-9 rounded-full text-white text-sm font-bold px-4'
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state.  */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <Link href="#" className="nav_item_menu" aria-current="page">ACCUEIL</Link>
          <Link href="#" className="nav_item_menu">NOS PRODUITS</Link>
          <Link href="#" className="nav_item_menu">POINTS DE VENTE</Link>
          <Link href="#" className="nav_item_menu">A PROPOS</Link>
          <Link href="#" className="nav_item_menu">CONTACT</Link>
          <CustomButton
            title='Contactez-nous'
            containerStyle='black_bgcolor rounded-full text-white text-sm font-bold px-4 py-2'
            handleClick={handleClick}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

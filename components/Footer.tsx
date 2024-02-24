

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  const date = new Date()
  return (
    <footer className='black_color'>

      <section className='mx-auto max-w-7xl h-44 flex flex-row justify-center items-center'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col gap-3 w-1/3'>
            <Image
              width={100}
              height={50}
              alt='Behati logo'
              src={'/assets/images/Behati-logo-white.png'}
            />
            <p className='text-sm text-white'>
              La marque qui vous propose des produits agroalimentaires 100% bio, cultivés sans engrais dans les hautes montagnes de l’ouest Cameroun.
            </p>
          </div>

          <div className="flex space-x-4 text-white">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <Link href="#" className="nav_item_menu" aria-current="page">ACCUEIL</Link>
            <Link href="#" className="nav_item_menu">NOS PRODUITS</Link>
            <Link href="#" className="nav_item_menu">POINTS DE VENTE</Link>
            <Link href="#" className="nav_item_menu">A PROPOS</Link>
            <Link href="#" className="nav_item_menu">CONTACT</Link>
          </div>
        </div>
      </section>

      <section className='h-12 bg-white flex flex-1 justify-center items-center'>
        <div className='mx-auto max-w-7xl flex flex-1 flex-row justify-between items-center'>
          <p className='text-md'>
            {date.getFullYear()} Tous droits reservés
          </p>
          <p className='text-md'>
            Politiques de confidentialité
          </p>
          <p className='text-md'>
            Conditions d'utilisation
          </p>
        </div>
      </section>
    </footer>
  )
}

export default Footer

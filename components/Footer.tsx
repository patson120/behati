

import Image from "next/image"
import Link from "next/link"

const Footer = () => {

  const date = new Date()
  return (
    <footer className="black_color">
      <section className="container h-44 max-lg:h-56 flex flex-row justify-center items-center">
        <div className="flex max-lg:block max-lg:space-y-3 justify-between items-center">
          <div className="flex flex-col gap-3 w-1/3 max-lg:w-2/3">
            <Image
              width={100}
              height={50}
              alt="Behati logo"
              src="/assets/images/Behati-logo-white.png"
            />
            <p className="text-sm text-white">
              La marque qui vous propose des produits agroalimentaires 100% bio, cultivés sans engrais dans les hautes montagnes de l’ouest Cameroun.
            </p>
          </div>
          <div className="flex max-lg:justify-start space-x-4 text-white">
            <Link href="#" className="nav_item_menu" aria-current="page">ACCUEIL</Link>
            <Link href="#" className="nav_item_menu">NOS PRODUITS</Link>
            <Link href="#" className="nav_item_menu">POINTS DE VENTE</Link>
            <Link href="#" className="nav_item_menu">A PROPOS</Link>
            <Link href="#" className="nav_item_menu">CONTACT</Link>
          </div>
        </div>
      </section>
      <section className="h-12 bg-white flex flex-1 justify-center items-center">
        <div className="mx-auto max-w-7xl flex flex-1 flex-row justify-between items-center text-center">
          <p className="text-md">
            {date.getFullYear()} Tous droits reservés
          </p>
          <Link href="#" className="text-md">Politiques de confidentialité</Link>
          <Link href="#" className="text-md">Conditions d&apos;utilisation</Link>
        </div>
      </section>
    </footer>
  )
}

export default Footer

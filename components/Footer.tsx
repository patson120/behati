

import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  const date = new Date()
  return (
    <footer className="black_bgcolor">
      <section className="container h-44 max-lg:h-56 flex flex-row justify-center items-center">
        <div className="flex max-lg:block max-lg:space-y-3 justify-between items-center">
          <div className="flex flex-col gap-3 w-3/4 md:w-1/3 lg:w-2/3 max-sm: max-sm:mx-1">
            <Image
              width={100}
              height={50}
              alt="Behati logo"
              src="/assets/images/Behati-logo-white.png"
            />
            <p className="text-xs text-white">
              La marque qui vous propose des produits agroalimentaires 100% bio, cultivés sans engrais dans les hautes montagnes de l’ouest Cameroun.
            </p>
          </div>
          <div className="flex max-lg:justify-start space-x-4 max-sm:space-x-0
              max-sm:grid max-sm:grid-rows-2 max-sm:grid-cols-3 max-sm:grid-flow-col
            text-white">
            <Link href="/" className="footer_nav_item_menu order-1" aria-current="page">Accueil</Link>
            <Link href="/produits" className="footer_nav_item_menu order-2">Nos produits</Link> 
            <Link href="/points-vente" className="footer_nav_item_menu order-3 max-sm:order-4">Points de vente</Link>
            <Link href="/a-propos" className="footer_nav_item_menu order-4 max-sm:order-3">A propos</Link>
            <Link href="/contact" className="footer_nav_item_menu order-5">Contact</Link>
          </div>
        </div>
      </section>
      <section className="h-12 bg-white flex flex-1 justify-center items-center max-sm:px-8">
        <div className="mx-auto max-w-7xl flex flex-1 flex-row justify-between items-center max-sm:text-[10px] max-sm:space-x-3 text-center">
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

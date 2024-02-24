'use client'

import CONSTANTS from "@/utils/constants"
import { collection, getDocs, query } from "firebase/firestore"
import { useLayoutEffect, useState } from "react"

import { Footer, Header, Hero } from "@/components"
import { database } from "@/config/firebase"


const Home = () => {

  const [users, setUsers] = useState([])
  const [cars, setCars] = useState<any>([])

  const getData = async () => {

    const data = await fetch(`${CONSTANTS.BASE_URL}/persons`)
    const response = await data.json();
    setUsers(response.users)

    const carsQuery = query(collection(database, "VEHICLE"))
    const querySnapshot = await getDocs(carsQuery)

    setCars([])
    querySnapshot.forEach((doc) => {
      setCars((prev: any) => [...prev, doc.data()])
    })
  }

  useLayoutEffect(() => {
    // getData();
  }, [])


  return (
    <div>
      <Header />
      <Hero />
      {/* Section A */}
      <section className="py-24 flex flex-1 flex-row justify-end">
        <div className="secondary-green w-[485px] h-[485px] px-4 py-3">
          <h2 className="text-xl font-semibold">
            Behati, le meilleur du terroir et offrez-vous les produits les plus raffinés.
          </h2>
        </div>
        <div className="h-auto w-1/2 flex-shrink-0">
          <img src="/assets/images/rectangle_5.png"
            className="w-full h-full" alt="Produit Camerounais" />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home



'use client'

import CONSTANTS from "@/utils/constants"
import { collection, getDocs, query } from "firebase/firestore"
import { useLayoutEffect, useState } from "react"

import { CustomButton, Footer, Header, Hero } from "@/components"
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
        <div className="secondary-green w-2/5 h-[390px] px-8 py-4 flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">
              Behati, le meilleur du terroir et offrez-vous les produits les plus raffinés.
            </h2>
            <p>
              Behati est une entreprise agroalimentaire qui vous propose des produits 100% bio, cultivés sans engrais dans les hautes montagnes de l’ouest Cameroun.
            </p>
            <p>
              Nous sommes nés d’une passion commune pour la nature, la santé et la gastronomie. 
              Nous voulons vous faire découvrir les saveurs authentiques et les bienfaits des produits locaux, tout en respectant l’environnement et les producteurs.
            </p>
            <CustomButton
              title='Commander un produit'
              containerStyle='black_bgcolor w-[200px] h-12 rounded-full text-white text-sm font-bold px-4 mt-2'
              handleClick={()=> {}}
            />
          </div>

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



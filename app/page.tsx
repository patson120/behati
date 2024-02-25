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
      <section className="py-24 flex flex-1 flex-row justify-end -space-x-24 ">

        <div className="flex justify-center items-center w-2/5 z-10">
          <div className="secondary-green h-[390px] px-8 py-4 flex justify-center items-center">
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
                handleClick={() => { }}
              />
            </div>

          </div>
        </div>

        <div className="h-1/4 w-1/2 flex-shrink-0 z-0 overflow-hidden">
          <img src="/assets/images/rectangle_5.png"
            className="w-full h-full" alt="Produit Camerounais" />
        </div>
      </section>

      {/* Section B */}
      <section className="w-full mt-20 mb-12">
        <div className="flex justify-center items-center">
          <div className="w-1/3 text-center space-y-2">
            <p className="text-4xl font-bold">Nos produits phares</p>
            <p className="text-md">Des produits sains, savoureux et pratiques, qui repondent à vos besoins nutritionnels et à vos envies gourmandes.</p>
          </div>
        </div>

        <div className="flex flex-row mt-4 gap-2">
          <div className="h-auto w-1/2 flex-shrink-0 relative">
            <div className="w-full h-full">
              <img src="/assets/images/rectangle_7.png"
                className="w-full h-full" alt="Produit Camerounais" />
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-[#1A191A] z-20"></div>
            <div className="absolute w-1/2 translate-x-1/3 bottom-12 z-30">
              <p className="text-white text-2xl font-bold mb-1">Huile de tournesol</p>
              <p className="text-md text-white">L’huile de tournesol est une huile végétale riche en acides gras insaturés,
                bénéfiques pour la santé cardiovasculaire. Elle est idéale pour assaisonner vos salades, vos crudités ou vos plats chauds.</p>
              <div className="mt-4 flex flex-row space-x-4">
                <CustomButton
                  title='Commander maintenant'
                  containerStyle='yellow_color h-12 rounded-full text-md font-bold px-4'
                  handleClick={() => { }}
                />

                <CustomButton
                  title='En savoir plus'
                  containerStyle='border-2 border-white h-12 rounded-full text-white text-md font-bold px-4'
                  handleClick={() => { }}
                />
              </div>
            </div>
          </div>
          <div className="h-auto w-1/2 flex-shrink-0 relative">
            <div className="w-full h-full">
              <img src="/assets/images/rectangle_8.png"
                className="w-full h-full" alt="Produit Camerounais" />
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-[#1A191A] z-20"></div>
            <div className="absolute w-1/2 translate-x-1/3 bottom-12 z-30">
              <p className="text-white text-2xl font-bold mb-1">Mayonnaise Behati</p>
              <p className="text-md text-white">La mayonnaise est une sauce onctueuse et savoureuse, à base d’huile de tournesol,
                de vinaigre, de moutarde et d’œufs. Elle accompagne parfaitement vos sandwichs, vos frites ou vos viandes.</p>
              <div className="mt-4">
                <CustomButton
                  title='Bientôt disponible'
                  containerStyle='bg-white h-12 rounded-full text-md font-bold px-6'
                  handleClick={() => { }}
                />
              </div>
            </div>
          </div>

        </div >
      </section >

      {/* Section C */}
      <section className="container mb-24">
        <div className="bg_image_map flex-center">
          <div className="flex-center w-2/5">
            <div className="text-center space-y-5">
              <p className="text-4xl font-bold">Nous vous livrons partout dans le monde</p>
              <p className="text-md">
                Vous êtes intéressé par nos produits 100% bio,
                cultivés sans engrais dans les hautes montagnes de
                l’ouest Cameroun ? N’attendez plus et découvrez nos
                points de vente partenaires !
              </p>
              <CustomButton
                title='Commander un produit'
                containerStyle='black_color h-12 rounded-full text-white text-md font-bold px-6'
                handleClick={() => { }}
              />
            </div>
          </div>
        </div>
      </section>


      {/* Section D */}
      <section className="container h-screen flex-center">
        <div className="flex-center w-2/5">
          <div className="text-center space-y-5">
            <p className="text-4xl font-bold">Nous sommes ouverts pour la distribution de nos produits</p>
            <p className="text-md">
              Vous voulez rejoindre notre aventure et rendre nos
              produits encore plus accessible pour tous ?
              Contactez-nous et travaillons ensembles.
            </p>
            <CustomButton
              title='Contactez-nous'
              containerStyle='black_color h-12 rounded-full text-white text-md font-bold px-10'
              handleClick={() => { }}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div >
  )
}

export default Home



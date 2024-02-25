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
      <section className="py-24 flex flex-1 max-md:flex-col flex-row justify-end md:-space-x-24">

        <div className="flex justify-center items-center w-2/5 max-md:-translate-y-1/3
              max-md:mx-auto max-md:w-4/5 max-lg:w-auto z-10 max-md:order-2" >
          <div className="secondary-green 
              h-[450px] max-lg:h-auto max-md:h-auto
              px-8 py-4 max-sm:py-8 
              flex justify-center items-center
              ">
            <div className="flex flex-col gap-4 max-md:gap-3 max-lg:gap-1">
              <h2 className="text-3xl max-md:text-2xl max-lg:text-xl font-semibold max-lg:font-bold">
                Behati, le meilleur du terroir et offrez-vous les produits les plus raffinés.
              </h2>
              <p className="max-md:text-">
                Behati est une entreprise agroalimentaire qui vous propose des produits 100% bio, cultivés sans engrais dans les hautes montagnes de l’ouest Cameroun.
              </p>
              <p className="max-md:text-">
                Nous sommes nés d’une passion commune pour la nature, la santé et la gastronomie.
                Nous voulons vous faire découvrir les saveurs authentiques et les bienfaits des produits locaux, tout en respectant l’environnement et les producteurs.
              </p>

              <CustomButton
                title='Commander un produit'
                containerStyle='black_bgcolor w-[200px] max-sm:w-full h-12 rounded-full text-white text-sm font-bold px-4 mt-2'
                handleClick={() => { }}
              />
            </div>

          </div>
        </div>

        <div className="h-1/4 w-1/2 max-md:w-full flex-shrink-0 z-0 overflow-hidden max-md:order-1">
          <img src="/assets/images/rectangle_5.png"
            className="w-full h-full" alt="Produit Camerounais" />
        </div>
      </section>

      {/* Section B */}
      <section className="w-full mt-20 max-sm:mt-0 mb-12">
        <div className="flex justify-center items-center">
          <div className="w-1/3 md:w-3/5 max-md:w-2/3 text-center space-y-2">
            <p className="text-4xl font-bold">Nos produits phares</p>
            <p className="text-md">Des produits sains, savoureux et pratiques, qui repondent à vos besoins nutritionnels et à vos envies gourmandes.</p>
          </div>
        </div>

        <div className="flex flex-row max-md:flex-col mt-4 gap-2 max-lg:border-2">
          <div className="h-auto w-1/2 max-md:w-full flex-shrink-0 relative">
            <div className="w-full h-full">
              <img src="/assets/images/rectangle_7.png"
                className="w-full h-full" alt="Produit Camerounais" />
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-[#1A191A] z-20"></div>
            <div className="absolute w-1/2 max-md:w-3/4 translate-x-1/3 max-md:translate-x-20 max-sm:translate-x-5 max-lg:translate-x-5  bottom-12 z-30">
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
          <div className="h-auto w-1/2 max-md:w-full flex-shrink-0 relative">
            <div className="w-full h-full">
              <img src="/assets/images/rectangle_8.png"
                className="w-full h-full" alt="Produit Camerounais" />
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-[#1A191A] z-20"></div>
            <div className="absolute w-1/2 max-md:w-3/4 translate-x-1/3 max-md:translate-x-20 max-sm:translate-x-5 max-lg:translate-x-5 bottom-12 z-30">
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
      <section className="container max-sm:mt-8 max-md:mt-48 mb-24 max-md:mb-0 md:mb-0">
        <div className="bg_image_map flex-center max-md:h-1/2">
          <div className="flex-center w-2/5 md:w-3/4 max-md:w-3/4 max-sm:w-full ">
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
      <section className="container h-screen max-sm:my-24 max-sm:h-min md:h-svh flex-center">
        <div className="flex-center w-2/5 md:w-4/5 max-md:w-4/5 max-sm:w-full">
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



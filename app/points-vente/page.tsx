
'use client'

import { CustomButton } from '@/components'
import { useRouter } from 'next/navigation'

const PointsVente = () => {

    const router = useRouter()
    return (
        <>
            <div className='container'>

                {/* Section A */}
                <div className='flex flex-1 flex-col lg:flex-row gap-10 justify-between mt-4 mb-24'>
                    <section className='w-full lg:w-1/2 h-auto flex justify-center items-start lg-[1120px]:border-2lg-[1120px]:border-red-800'>
                        <div className='h-min my-auto flex flex-col gap-5 md:gap-10 pr-10'>
                            <h1

                                className='points_vente_titre text-3xl max-sm:text-2xl md:text-5xl font-medium'>
                                Points de vente des produits Behati.
                            </h1>
                            <p className='text-sm md:text-lg'>
                                Retrouvez tous nos points de ventes physiques des produits Behati.
                                Goûtez à nos délicieuses huiles de tournesol et mayonnaises,
                                fabriquées artisanalement dans notre atelier.
                            </p>
                        </div>
                    </section>
                    <div className="w-full lg:w-[525px] lg:h-[525px]
                            ex-shrink-0 overflow-hidden">
                        <img src="/assets/images/tournesol-oil.png"
                            className="w-full h-full" alt="Bouteille d'huile de tournesol" />
                    </div>
                </div>

                {/* Section B */}
                <section className='w-full mb-0 mt-4 md:mb-24'>
                    <div className='w-full lg:w-3/5 my-auto flex flex-col gap-3 pr-10'>
                        <h1 className='text-xl md:text-3xl font-medium'>
                            Nos points de ventes
                        </h1>
                        <p className='text-sm md:text-lg'>
                            Des produits sains, savoureux et pratiques,
                            qui repondent à vos besoins nutritionnels et à vos envies gourmandes.
                        </p>
                    </div>
                    <div className='mt-10 flex flex-col gap-8'>
                        <Point
                            lieu={"Yaoundé"}
                            libelle={"Boutique Behati : située à proximité de notre atelier,"}
                        />
                        <Point
                            lieu={"Yaoundé"}
                            libelle={"Supermarché Carrefourm situé à proximité de notre atelier"}
                        />
                        <Point
                            lieu={"Yaoundé"}
                            libelle={"Marché de Mfoundi : situé au cœur de Yaoundé"}
                        />
                    </div>
                </section>


                {/* Section C */}
                <section className="container max-sm:mt-8 mb-24 max-md:my-10 max-md:py-10">
                    <div className="bg_image_map flex-center max-md:h-1/3">
                        <div className="flex-center w-full lg:w-3/5  ">
                            <div className="text-center max-sm:text-left space-y-5">
                                <p className="text-2xl md:text-4xl max-sm:text-left font-bold">Nous vous livrons partout dans le monde</p>
                                <p className="text-md max-sm:text-xs">
                                    Vous êtes intéressé par nos produits 100% bio,
                                    cultivés sans engrais dans les hautes montagnes de
                                    l’ouest Cameroun ? N’attendez plus et découvrez nos
                                    points de vente partenaires !
                                </p>
                                <CustomButton
                                    title='Commander un produit'
                                    containerStyle='black_bgcolor h-12 rounded-full text-white text-md font-bold px-6'
                                    handleClick={() =>  router.push('/commande')}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default PointsVente


const Point = ({
    lieu,
    libelle
}: {
    lieu: string;
    libelle: string;
}) => {

    return (
        <div className='w-full flex flex-col justify-start items-start md:flex-row 
                md:justify-between md:items-center pb-4 pr-2 border-b-2 border-b-gray-300'>

            <div className='md:flex md:flex-row sm:block sm:justify-start 
                justify-center items-center space-x-0 sm:space-y-1 md:space-x-10 lg:space-x-16'>
                <h3 className='text-sm md:text-lg uppercase font-bold'>{lieu}</h3>
                <p className='text-md md:text-md'>{libelle}</p>
            </div>
            <div className='w-full md:w-auto flex justify-end items-center mt-2 md:mt-0' >
                <button className=''>
                    <span className='text-md font-bold'>Itinéraire</span>
                </button>
            </div>
        </div>
    )
}
'use client'

import { CustomButton, Footer, Header } from '@/components'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Produits = () => {

    const router = useRouter()
    return (
        <div>
            <Header />

            {/* Section A */}
            <section className='grid grid-cols-1 md:grid-cols-2 h-w-full h-screen md:h-[650px]'>
                <div
                    style={{
                        backgroundImage: 'url("/assets/images/produits-bg-image.png")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundOrigin: 'center',
                        backgroundSize: 'cover',
                        height: 'auto',
                        width: 'auto',
                    }}
                    className="flex-shrink-0 w-full flex justify-center items-center"
                >
                    <div className='px-8 md:px-0 w-full md:w-2/3 flex flex-col gap-5'>
                        <p className='text-md text-white'>Goutez la différence.</p>
                        <h1 className='w-4/5 md:w-full text-2xl md:text-3xl lg:text-4xl text-white font-semibold'>
                            L&#39;huile qui donne du peps à vos salades et du soleil à vos plats chauds.
                        </h1>

                        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-3 max-sm:mt-4">
                            <CustomButton
                                title='Commander maintenant'
                                containerStyle='primary_green h-12 max-sm:w-full rounded-full text-sm font-bold px-4'
                                handleClick={() => { }}
                            />
                            <CustomButton
                                title='Contactez-nous'
                                containerStyle='border-2 h-12 rounded-full text-white text-sm font-bold px-4'
                                handleClick={() => { router.push('/contact') }}
                            />
                        </div>
                    </div>

                </div>

                <div
                    style={{
                        backgroundImage: 'url("/assets/images/rectangle_27.png")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundOrigin: 'center',
                        backgroundSize: 'cover',
                        // height: '100%'
                        height: 'auto',
                        width: 'auto',
                    }}
                    className="h-20"></div>
            </section>

            {/* Section B */}
            <section className='container my-36'>
                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    <div className='w-full h-[300px] md:h-[500px] order-2 md:order-1'>
                        <img
                            className='object-cover w-full h-full'
                            src="/assets/images/rectangle_35.png"
                            alt="Un plat fait à base de l'huile de tournesol" />
                    </div>
                    <div className='flex justify-start items-center order-1 md:order-2 mb-16 mb:mb-0'>
                        <div className='flex flex-col md:gap-3 gap-6 text-left px-0 md:px-20 md:pl-8 md:pr-0'>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Sans traitement chimique ni chaleur.</h1>
                            <p>
                                À la différence des huiles raffinées, notre huile de tournesol n&#39;est
                                jamais soumise à des solvants chimiques ni à une chaleur excessive de plus de 200°C.
                            </p>
                            <p>Ainsi, vous bénéficiez d&#39;une huile naturelle, au goût distinctif, sans aucun risque pour votre santé.</p>

                            <CustomButton
                                title='Commander'
                                containerStyle='primary_green h-12 w-full md:w-[200px] rounded-full text-sm md:text-md font-bold mt-4 px-4'
                                handleClick={() => { }}
                            />

                        </div>
                    </div>
                </div>
            </section>

            {/* Section C */}
            <section className='container my-36'>
                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    <div className='flex justify-start items-center'>
                        <div className='flex flex-col gap-6 md:gap-2 text-left text-sm md:text-md pr-0 md:pr-20 mb-12 md:mb-0'>
                            <h1 className='text-lg md:text-xl lg:text-3xl font-bold'>Huile de tournesol</h1>
                            <p className=''>
                                Une huile saine et savoureuse qui sublime vos plats et prend soin de vous.
                                Riche en acides gras insaturés, elle est idéale pour assaisonner vos salades, crudités et plats chauds.
                                Behati est une huile pure et naturelle, au goût délicat et subtil. <br /><br />

                                C&#39;est l&#39;huile idéale pour une cuisine saine et gourmande.
                                Behati est une huile écoresponsable, engagée et accessible. <br /> <br />

                                Choisissez Behati et découvrez le plaisir d&#39;une huile qui vous veut du bien.
                            </p>

                            <div className='flex flex-row gap-3'>
                                <p>A partir de <span className='yellowColor ml-2 text-lg lg:text-3xl font-bold'>4.000 FCFA</span></p>
                                <div className="w-auto">
                                    <select id="country" name="country" autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm 
                                            ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                                            sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option value={"1L"}>1 litre</option>
                                        <option value={'5L'}>5 litre</option>
                                        <option value={"10L"}>10 litre</option>
                                    </select>
                                </div>
                            </div>

                            <p>Livraison rapide et gratuite à partir de 30.000 FCFA d’achat</p>

                            <CustomButton
                                title='Commander'
                                containerStyle='black_bgcolor text-white h-12 w-full md:w-[200px] rounded-full text-sm font-bold mt-4 px-4'
                                handleClick={() => { }}
                            />

                        </div>
                    </div>

                    <div className='w-full h-[300px] md:h-[500px]'>
                        <img
                            className='object-cover w-full h-full'
                            src="/assets/images/rectangle_27.png"
                            alt="Un plat fait à base de l'huile de tournesol" />
                    </div>
                </div>
            </section >

            {/* Section D */}
            <section
                style={{
                    backgroundImage: 'url("/assets/images/rectangle_37.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundOrigin: 'center',
                    backgroundSize: 'cover',
                    height: '700px'
                }}
                className=''

            >
                <div className='h-full flex items-end md:items-end container'>
                    <div className='w-full md:w-1/2 flex flex-col gap-5 mb-12'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold'>
                            L&#39;huile qui rend vos plats tellement bons qu&#39;on en redemande.
                        </h1>
                        <p className='text-md text-white'>Même votre belle-mère.</p>
                        <CustomButton
                            title='Commander'
                            containerStyle='primary_green h-12  w-full md:w-1/2 mt-3 rounded-full text-sm font-bold px-4'
                            handleClick={() => { }}
                        />
                    </div>
                </div>
            </section>

            {/* Section E */}
            < section className='container my-36' >
                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    <div className='w-full h-[300px] md:h-[500px] order-2 md:order-1'>
                        <img
                            className='object-cover w-full h-full'
                            src="/assets/images/rectangle_36.png"
                            alt="Un plat fait à base de l'huile de tournesol" />
                    </div>
                    <div className='flex justify-start items-center mb-16 mb:mb-0'>
                        <div className='flex flex-col md:gap-3 gap-6 text-left px-0 md:px-20 md:pl-8 md:pr-12'>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Une extraction de première pression à froid</h1>
                            <p className="text-sm md:text-md">
                                Notre Huile de Tournesol est extraite de façon mécanique,
                                grâce à une première pression à froid, dans une température
                                inférieure à 50°C. Ce processus soigneux donne une huile
                                légèrement colorée, à l&#39;odeur fruitée et à la légère saveur
                                de graines de tournesol fraîches.
                            </p>
                            <p>
                                Parfois, vous pourriez remarquer un léger dépôt au fond de la bouteille,
                                un signe de qualité provenant des cires naturelles des graines.
                            </p>

                            <CustomButton
                                title='Commander'
                                containerStyle='primary_green h-12 w-full md:w-[200px] rounded-full text-sm font-bold mt-4 px-4'
                                handleClick={() => { }}
                            />

                        </div>
                    </div>
                </div>
            </section >

            {/* Section F */}
            <section className="container my-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-3">

                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <Image
                            src="/assets/icons/icon_1.png"
                            alt=''
                            width={100}
                            height={100}
                        />
                        <p className='text-md text-gray-600 text-center px-0 md:px-20'>
                            Vegan, sans gluten, sans lactose et sans noix, pour convenir à tous les régimes alimentaires.
                        </p>
                    </div>

                    <div className='flex flex-col gap-5 justify-center items-center'>
                        <Image
                            src="/assets/icons/icon_2.png"
                            alt=''
                            width={100}
                            height={100}
                        />
                        <p className='text-md text-gray-600 text-center px-0 md:px-20'>
                            Des ingrédients d&#39;origine naturelle, absence de pesticides, d&#39;OGM ou d’additifs chimiques
                        </p>
                    </div>
                    <div className='flex flex-col gap-5 justify-center items-center'>
                        <Image
                            src="/assets/icons/icon_3.png"
                            alt=''
                            width={100}
                            height={100}
                        />
                        <p className='text-md text-gray-600 text-center px-0 md:px-20'>
                            Fabriqués au Cameroun, dans le respect des normes de qualité et de sécurité alimentaire.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section G */}
            <section className="container max-sm:mt-8 mb-24 max-md:my-10 max-md:py-10">
                <div className="bg_image_map flex-center max-md:h-1/3">
                    <div className="flex-center w-full lg:w-3/5  ">
                        <div className="text-center max-sm:text-left space-y-5">
                            <p className="text-2xl md:text-4xl max-sm:text-left font-bold">Nous vous livrons partout dans le monde.</p>
                            <p className="text-md max-sm:text-xs">
                                Vous êtes intéressé par nos produits 100% bio,
                                cultivés sans engrais dans les hautes montagnes de l&#39;ouest Cameroun ?
                                N&#39;attendez plus et découvrez nos points de vente partenaires !
                            </p>
                            <CustomButton
                                title='Commander un produit'
                                containerStyle='black_bgcolor h-12 rounded-full text-white text-md font-bold px-6'
                                handleClick={() => { router.push("/contact") }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section H */}
            <section className="container h-screen max-sm:my-24 max-sm:h-min md:h-svh flex-center">
                <div className="flex-center w-1/3 md:w-3/5 max-md:w-4/5 max-sm:w-full">
                    <div className="text-center max-sm:text-left space-y-5">
                        <p className="text-4xl max-sm:text-xl font-bold">Nous sommes ouverts pour la distribution de nos produits</p>
                        <p className="text-md max-sm:text-xs">
                            Vous voulez rejoindre notre aventure et rendre nos
                            produits encore plus accessible pour tous ?
                            Contactez-nous et travaillons ensembles.
                        </p>
                        <CustomButton
                            title='Contactez-nous'
                            containerStyle='black_bgcolor h-12 rounded-full text-white text-md font-bold px-10'
                            handleClick={() => { }}
                        />
                    </div>
                </div>
            </section>

            <Footer />

        </div >
    )
}

export default Produits

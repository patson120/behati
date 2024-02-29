

'use client'

import { CustomButton, Footer, Header } from '@/components'
import { useRouter } from 'next/navigation'
import React from 'react'

const Apropos = () => {

    const router = useRouter()
    return (
        <>
            {/* Section A */}
            <section className='w-full h-[425px] overflow-hidden'>
                <div className="flex-shrink-0 w-full flex justify-center items-center"
                    style={{
                        backgroundImage: 'url("/assets/images/apropos-bg-image.png")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundOrigin: 'center',
                        backgroundSize: 'cover',
                        height: '425px'
                    }}
                ></div>
            </section >


            {/* Section B */}
            <section className='container -translate-y-24 lg:-translate-y-1/4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6'>
                    <div className='w-full h-auto lg:h-96 secondary-green flex justify-start items-center'>
                        <div className='text-left p-10 flex flex-col gap-y-8'>
                            <h1 className='text-4xl font-medium'>Qui sommes nous ?</h1>
                            <p>Né d&#39;une passion ardente pour la nature,
                                la santé et la gastronomie, nous sommes Behati,
                                une entreprise agroalimentaire qui cultive l&#39;excellence
                                dans les hauteurs majestueuses de l&#39;ouest Cameroun.
                                Notre terre fertile, baignée de soleil et caressée par les nuages,
                                donne naissance à des produits 100% bio,
                                gorgés de saveurs authentiques et de bienfaits naturels.
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-auto mt-5 lg:mt-0 lg:h-96 flex justify-start items-end'>
                        <div className='text-left lg:px-10 flex flex-col gap-y-2'>
                            <h1 className='text-xl font-medium'>Loin des engrais chimiques et des pesticides néfastes </h1>
                            <p>
                                Nos cultures s&#39;épanouissent dans un environnement sain et respectueux.
                                Chaque fruit, chaque légume est un trésor précieux,
                                une ode à la nature et à ses secrets.
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-96 hidden lg:block'>
                        <img
                            className='object-cover w-full h-full'
                            src="/assets/images/rectangle_26.png"
                            alt="Un plat fait à base de l'huile de tournesol" />
                    </div>
                    <div className='w-full h-auto md:h-96'>
                        <div className='text-left text-sm md:text-md lg:px-10 flex flex-col gap-y-10 lg:gap-y-4'>
                            <div>
                                <h1 className='text-xl font-medium'>Behati, c&#39;est plus qu&#39;une simple entreprise.</h1>
                                <p>
                                    C&#39;est une invitation à un voyage culinaire extraordinaire,
                                    à la découverte des trésors gustatifs du Cameroun.
                                    C&#39;est une ode à la terre nourricière et aux traditions ancestrales.
                                    C&#39;est un engagement à préserver l&#39;environnement et à valoriser le travail des producteurs locaux.
                                </p>
                            </div>

                            <div>
                                <h1 className='text-xl font-medium'>Avec Behati, chaque bouchée est une expérience unique.</h1>
                                <p>
                                    Laissez-vous transporter par les parfums envoûtants,
                                    les textures onctueuses et les saveurs intenses de nos produits.
                                    Ressentez la puissance de la nature et la passion qui anime nos cœurs.
                                </p>
                            </div>

                            <div>
                                <h1 className='text-xl font-medium'>
                                    Behati, c&#39;est l&#39;alliance parfaite entre le plaisir gustatif, le bien-être et l&#39;engagement
                                </h1>
                                <p>
                                    Rejoignez-nous dans cette odyssée des saveurs authentiques
                                    et participez à la création d&#39;un avenir plus durable et plus sain.
                                </p>
                                <p className='pt-4 underline'>Behati : La nature s&#39;invite à votre table.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className='block mb-16 max-sm:mb-12 lg:hidden' />
            {/* Section C */}

            <section className='container '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8'>
                    <div>
                        <h1 className='text-xl font-bold'>Que faisons nous ?</h1>
                        <div className='text-sm mt-2'>
                            <p>Nous proposons deux produits phares :</p>
                            <ul className='pl-10'>
                                <li className='list-disc'>
                                    Huile de tournesol: première pression à froid, riche en acides gras insaturés,certifiée bio, vegan, sans gluten, sans lactose et sans noix.
                                </li>
                                <li className='list-disc'>
                                    Mayonnaise: onctueuse et savoureuse, à base d&#39;huile de tournesol bio, de vinaigre, de moutarde et d&#39;oeufs, certifiée bio, vegan, sans gluten, sans lactose et sans noix.
                                </li>
                            </ul>
                            <p>Tous les ingrédients sont certifiés bio par Ecocert, ce qui garantit l&#39;absence de pesticides, d&#39;OGM ou d&#39;additifs chimiques.</p>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-xl font-bold'>Comment le faisons-nous ?</h1>
                        <div className='text-sm mt-2'>
                            <p>Nous sommes concernés par la :</p>
                            <ul className='pl-10'>
                                <li className='list-disc'>
                                    Collaboration étroite avec des agriculteurs locaux:
                                    respect de la biodiversité et des sols, rémunération équitable.
                                </li>
                                <li className='list-disc'>
                                    Transformation artisanale: huile et mayonnaise produites dans un atelier à Yaoundé,
                                    avec des procédés artisanaux et des équipements modernes.
                                </li>
                                <li className='list-disc'>
                                    Qualité et traçabilité: contrôle à chaque étape,
                                    de la récolte à la distribution.
                                </li>
                            </ul>
                            <p>
                                Nous valorisons ainsi une production locale, responsable et transparente.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-xl font-bold'>Pourquoi le faisons-nous ?</h1>
                        <div className='text-sm mt-2'>
                            <p>
                                Nous voulons vous offrir des produits sains,
                                savoureux et pratiques, qui répondent à vos besoins
                                nutritionnels et à vos envies gourmandes. Nous voulons
                                aussi contribuer au développement économique et social du Cameroun,
                                en valorisant les ressources locales et en soutenant les acteurs
                                du secteur agroalimentaire. Nous voulons enfin protéger la planète,
                                en réduisant notre impact environnemental et en promouvant une agriculture durable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section D */}

            <section className='container my-14 md:my-36 flex gap-4 overflow-x-auto'>
                <img
                    className='h-[180px] w-[180px] md:h-[284px] md:w-[284px] lg:h-[384px] lg:w-[384px]'
                    src="/assets/images/rectangle_27.png"
                    alt="Un plat fait à base de l'huile de tournesol" />
                <img
                    className='h-[180px] w-[180px] md:h-[284px] md:w-[284px] lg:h-[384px] lg:w-[384px]'
                    src="/assets/images/rectangle_28.png"
                    alt="Un plat fait à base de l'huile de tournesol" />
                <img
                    className='h-[180px] w-[180px] md:h-[284px] md:w-[284px] lg:h-[384px] lg:w-[384px]'
                    src="/assets/images/rectangle_29.png"
                    alt="Un plat fait à base de l'huile de tournesol" />
            </section>


            {/* Section D */}
            <section className='container my-10'>
                <div className='flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-6'>
                    <div className='w-full md:w-2/3 lg:w-auto flex flex-col gap-2'>
                        <h1 className='text-3xl font-bold'>Notre mission</h1>
                        <p className=' text-sm md:text-md'>
                            Vous pouvez aussi nous suivre sur les réseaux sociaux,
                            où nous partageons nos actualités, nos recettes,
                            nos conseils et nos offres.
                        </p>
                    </div>
                    <div className='flex flex-col lg:grid lg:grid-cols-2 gap-10 mt-8 '>

                        <div className='flex flex-col gap-1'>
                            <h1 className='text-md font-bold'>Cultiver des produits 100% bio et sains</h1>
                            <p className=' text-sm md:text-md'>
                                Dans les montagnes de l&#39;ouest Cameroun,
                                en utilisant des méthodes durables et respectueuses de l&#39;environnement.
                            </p>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <h1 className='text-md font-bold'>Offrir une alternative saine et accessible</h1>
                            <p className=' text-sm md:text-md'>
                                Aux consommateurs qui recherchent des produits de qualité.
                            </p>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <h1 className='text-md font-bold'>Préserver les saveurs authentiques</h1>
                            <p className=' text-sm md:text-md'>
                                Des produits locaux et les partager avec le monde entier.
                            </p>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <h1 className='text-md font-bold'>Contribuer au développement économique</h1>
                            <p className=' text-sm md:text-md'>
                                Des communautés locales en valorisant le travail des producteurs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Section E */}
            <section className="container max-sm:mt-8 mb-24 max-md:my-10 max-md:py-10">
                <div className="bg_image_map flex-center max-md:h-1/3">
                    <div className="flex-center w-full lg:w-3/5  ">
                        <div className="text-center max-sm:text-left space-y-5">
                            <p className="text-2xl md:text-4xl max-sm:text-left font-bold">Nous sommes ouverts pour la distribution de nos produits.</p>
                            <p className="text-md max-sm:text-xs">
                                Vous voulez rejoindre notre aventure et rendre nos produits
                                encore plus accessible pour tous ? Contactez-nous et travaillons ensembles.
                            </p>
                            <CustomButton
                                title='Contactez-nous'
                                containerStyle='black_bgcolor h-12 rounded-full text-white text-md font-bold px-6'
                                handleClick={() => { router.push("/contact") }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Apropos

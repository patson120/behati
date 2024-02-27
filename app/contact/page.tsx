'use client'

import { Footer, Header, CustomButton  } from '@/components'
import React from 'react'


const Contact = () => {
    return (
        <div>
            <Header />
            {/* Section A */}
            <section className='w-full h-[425px] overflow-hidden'>
                <div className="flex-shrink-0 w-full flex justify-center items-center"
                    style={{
                        backgroundImage: 'url("/assets/images/bg-image-2.png")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundOrigin: 'center',
                        backgroundSize: 'cover',
                        height: '425px'
                    }}
                >
                    <div className='w-full mx-12 md:mx-0 md:w-3/5 text-center text-white flex flex-col gap-4'>
                        <p className='text-sm'>Contactez-nous</p>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold'>Vous avez des questions, des suggestions ou des compliments ?</h1>
                        <p className='text-sm md:text-md'>N’hésitez pas à nous contacter ! Nous serons ravis de vous répondre et de vous écouter.</p>
                    </div>
                </div>
            </section >
            {/* Section B */}
            <section className='my-16 flex flex-col justify-center items-center gap-10'>
                <h3 className='text-xl font-medium text-center w-full px-10 md:px-0 md:w-3/5'>Vous pouvez nous joindre par les moyens suivants</h3>
                <div className='container flex flex-wrap justify-between space-x-3 md:space-x-6 space-y-2'>
                    <RoundedButton
                        title={"Email"}
                        value={" : contact@behati.cm"}
                    />
                    <RoundedButton
                        title={"Téléphone"}
                        value={" : contact@behati.cm"}
                    />
                    <RoundedButton
                        title={"Courrier"}
                        value={" : Behati, BP 1234, Yaoundé, Cameroun"}
                    />
                </div>


                <div className='px-10 mt-24 md:px-0 w-full md:w-3/5 flex flex-col text-center gap-2'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold'>Laisser nous un message</h1>
                    <p>Vous pouvez également remplir le formulaire ci-dessous et nous vous recontacterons dans les plus brefs délais.</p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-y-3">

                    <div className="col-span-2 sm:col-span-1 sm:mr-2">
                        <div className="mt-2">
                            <div className="flex rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Votre nom* </span>
                                <input type="text" name="name" id="name" autoComplete="name" className="block flex-1 border-0 bg-transparent py-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <div className="mt-2">
                            <div className="flex rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Votre prénom* </span>
                                <input type="text" name="prenom" id="prenom" autoComplete="prenom" className="block flex-1 border-0 bg-transparent py-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
                            </div>
                        </div>
                    </div>

                    <div className="sm:mr-2">
                        <div className="mt-2">
                            <div className="flex rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Adresse email* </span>
                                <input type="text" name="prenom" id="prenom" autoComplete="prenom" className="block flex-1 border-0 bg-transparent py-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="mt-2">
                            <div className="flex rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Objet du message* </span>
                                <input type="text" name="prenom" id="prenom" autoComplete="prenom" className="block flex-1 border-0 bg-transparent py-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                        <div className="mt-2">
                            <textarea id="about" name="about" rows={3} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Saissisez votre message dans le cadre ci-dessus.</p>
                    </div>

                    <div className="col-span-full mb-24">
                        <CustomButton
                            title='Contactez-nous'
                            containerStyle='primary_green h-12 mt-10 w-full rounded-full text-md font-bold px-4'
                            handleClick={() => { }}
                        />
                    </div>

                </div>


                <div className='container flex flex-wrap justify-between space-x-3 md:space-x-6 space-y-2'>
                    <RoundedButton
                        title={"Facebook"}
                        value={" : behati-group"}
                    />
                    <RoundedButton
                        title={"Twitter"}
                        value={" : behati-group"}
                    />
                    <RoundedButton
                        title={"LinkedIn"}
                        value={" : behati-group"}
                    />
                </div>
            </section>



            {/* Section D */}
            <Footer />
        </div >
    )
}

export default Contact


const RoundedButton = ({ title, value }: { title: string; value: string; }) => {

    return <div className='flex flex-row justify-center items-center rounded-full border-[1.5px] border-gray-200 px-10 py-2'>
        <h6 className='font-semibold text-md'>{title}</h6>
        <p className='text-md'>{value}</p>
    </div>
}

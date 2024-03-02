'use client'

import { CustomButton } from '@/components';
import { ContactType } from '@/types';
import { FormEvent, useState } from 'react';



const Contact = () => {

    const [isLoading, setIsloading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const [contact, setContact] = useState<ContactType>({
        id: "",
        nom: "",
        prenom: "",
        email: "",
        object: "",
        message: ""
    })


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setIsloading(true)

        fetch('http://localhost:3000/api/contacts',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact)
            }
        )
            .then(response => response.json())
            .then(() => {
                setIsloading(false)
                setContact({id: "",nom: "",prenom: "",email: "",object: "",message: ""})
                showMessage()
            })
            .catch(err => {
                setIsloading(false)
                console.log(err.message)
            })

    }


    const showMessage = () => {
        setShowSuccess(true)

        setTimeout(() => {
            setShowSuccess(false)
        }, 3000);
    }

    return (
        <>
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
            <section className='px-10 max-sm:px-5 md:px-0 my-16 flex flex-col justify-center items-center gap-y-6 md:gap-y-10 '>
                <h3 className='text-xl font-medium text-left md:text-center w-full md:w-3/5'>Vous pouvez nous joindre par les moyens suivants</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

                <div className=' mt-5 w-full md:w-3/5 lg:w-2/5'>
                    <div className='md:px-0 flex flex-col text-center gap-2 '>
                        <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold'>Laisser nous un message</h1>
                        <p className='text-xs md:text-sm lg:text-md px-10'>Vous pouvez également remplir le formulaire ci-dessous et nous vous recontacterons dans les plus brefs délais.</p>
                    </div>

                    {showSuccess && <div className='secondary-green p-4 mt-4'>
                        <p className='text-sm'>Message envoyé avec succès!</p>
                    </div>}
                    <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-2 gap-y-4">

                        <div className="col-span-full md:col-span-1 md:mr-2 flex rounded-lg shadow-sm">
                            <input type="text" name="name" id="name" autoComplete="name"
                                value={contact.nom}
                                onChange={(e) => setContact({ ...contact, nom: e.target.value })}
                                required
                                className="block flex-1 border-0 bg-transparent rounded-lg py-3 pl-4 text-gray-900 
                            ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600
                            placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Votre nom*" />
                        </div>

                        <div className="col-span-full md:col-span-1 flex rounded-lg shadow-sm">
                            <input type="text" name="prenom" id="prenom" autoComplete="name"
                                value={contact.prenom}
                                onChange={(e) => setContact({ ...contact, prenom: e.target.value })}
                                className="block flex-1 border-0 bg-transparent rounded-lg py-3 pl-4 text-gray-900 
                            ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600
                            placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Votre prénom*" />
                        </div>

                        <div className="col-span-full flex rounded-lg shadow-sm">
                            <input type="text" name="address" id="address" autoComplete="email"
                                value={contact.email}
                                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                                required
                                className="block flex-1 border-0 bg-transparent rounded-lg py-3 pl-4 text-gray-900 
                            ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600
                            placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Adresse email*" />
                        </div>

                        <div className="col-span-full flex rounded-lg shadow-sm">
                            <input type="email" name="address" id="address" autoComplete="email"
                                value={contact.object}
                                onChange={(e) => setContact({ ...contact, object: e.target.value })}
                                required
                                className="block flex-1 border-0 bg-transparent rounded-lg py-3 pl-4 text-gray-900 
                            ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600
                            placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Objet du message*" />
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                            <div className="mt-2">
                                <textarea id="about" name="about" rows={3}
                                    value={contact.message}
                                    onChange={(e) => setContact({ ...contact, message: e.target.value })}
                                    required
                                    placeholder='Saissisez votre message ici...'
                                    className="block w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Saissisez votre message dans le cadre ci-dessus.</p>
                        </div>

                        <div className="col-span-full mb-8">
                            <CustomButton
                                title={isLoading ? 'En cours...' : 'Envoyer'}
                                type='submit'
                                containerStyle='primary_green h-12 mt-10 w-full rounded-full text-md font-bold px-4'
                                handleClick={() => { }}
                            />
                        </div>

                    </form>
                </div>

                <div className='px-10 mt-5 md:px-0 w-full md:w-3/5 flex flex-col text-left md:text-center gap-y-2'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold'>Rejoignez-nous sur les reseaux</h1>
                    <p className='text-xs md:text-sm lg:text-md'>Vous pouvez aussi nous suivre sur les réseaux sociaux, où nous partageons nos actualités, nos recettes, nos conseils et nos offres.</p>
                </div>

                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </ >
    )
}

export default Contact


const RoundedButton = ({ title, value }: { title: string; value: string; }) => {

    return <div className='flex flex-row justify-center items-center rounded-full border-[1.5px] border-gray-200 px-2 md:px-10 py-3'>
        <h6 className='font-semibold text-xs lg:text-md'>{title}</h6>
        <p className='text-xs lg:text-md'>{value}</p>
    </div>
}

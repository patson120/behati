'use client'

import { CustomButton } from "@/components";
import { useState } from "react";


const Commande = () => {

    const menus = ['Produits', 'Localisation', 'payement'];
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <>
            <div className="container">
                {/* Section A */}
                <section className='grid grid-cols-1 md:grid-cols-2 gap-4  h-w-full'>
                    <div className="pt-5 pr-8">

                        <div className="mb-10 flex justify-between">
                            {
                                menus.map((menu, index) => {
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedIndex(index)}
                                            type="button"
                                            style={{ fontWeight: selectedIndex === index ? 'bold' : 'normal' }}
                                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 
                                            bg-white rounded-md hover:bg-gray-50 hover:font-bold focus:font-bold
                                             focus:outline-none focus:bg-gray-50">
                                            {menu}
                                        </button>
                                    )
                                })
                            }
                        </div>

                        {/* Nom complet */}
                        <span className="text-xs font-medium mb-2 mt-5 block">Votre nom complet</span>
                        <div className="flex rounded-full shadow-sm">
                            <input type="text" name="name" id="name" autoComplete="name"
                                value={""}
                                onChange={(e) => { }}
                                required
                                className="block flex-1 border-0 bg-transparent rounded-full py-2 px-4 text-gray-900 
                                    ring-1 ring-inset ring-gray-300 focus-within:ring-2 
                                    focus-within:ring-inset focus-within:ring-indigo-600
                                  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Votre nom complet*" />
                        </div>

                        {/* Numéro de téléphone */}
                        <span className="text-xs font-medium mb-2 mt-5 block">Numéro de téléphone</span>
                        <div className="flex rounded-full shadow-sm">
                            <input type="number" name="phone" id="phone"
                                value={""}
                                onChange={(e) => { }}
                                required
                                
                                className="block flex-1 border-0 bg-transparent rounded-full py-2 px-4 text-gray-900 
                                    ring-1 ring-inset ring-gray-300 focus-within:ring-2 
                                    focus-within:ring-inset focus-within:ring-indigo-600
                                  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Ex: +237 650 00 00 00" />
                        </div>

                        {/* Quantité voulue */}
                        <span className="text-xs font-medium mb-2 mt-5 block">Quantité voulue</span>
                        <div className="flex rounded-full shadow-sm">
                            <input type="number" name="quantite" id="quantite"
                                // value={""}
                                // onChange={(e) => { }}
                                required
                                className="block flex-1 border-0 bg-transparent rounded-full py-2 px-4 text-gray-900 
                                    ring-1 ring-inset ring-gray-300 focus-within:ring-2 
                                    focus-within:ring-inset focus-within:ring-indigo-600
                                  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Ex: 20 bouteilles (1L)" />
                        </div>
                        <div className="mt-10">
                            <CustomButton
                                title='Suivant'
                                containerStyle='primary_green h-11 w-full rounded-full text-sm font-bold px-4'
                                handleClick={() => { }}
                            />
                        </div>
                    </div>
                    <div className="p-10 pt-0">
                        <div className='w-auto h-auto '>
                            <img
                                className='object-cover w-full h-full'
                                src="/assets/images/huile-tournesol-en-bouteille.png"
                                alt="Un plat fait à base de l'huile de tournesol" />
                        </div>

                        <h1 className='font-bold mt-4'>Nous livrons dans 15 pays dans le monde</h1>
                        <p className='mt-2 text-[11px]'>
                            Cameeroun, France, Cote d’ivoire, Congo, Canada, Etats-Unis, Angleterre,
                            Espagne, Gabon, Guinée Equatoriale, Maroc, Belgique, Pays-Bas, Russie
                        </p>
                        <h1 className='font-bold mt-4'>Nos moyens de paiement</h1>
                        <p className='mt-2 text-[11px]'>
                            Nous acceptons les paiements via stripes et virement bancaire et les paiement
                            mobiles tels que Orange Money et MTN Mobile pour le Cameroun uniquement.
                        </p>
                        <p className="text-[10px] font-bold mt-5 underline">
                            Comment se passe la livraison à l’internationale ?
                        </p>
                    </div>

                </section>

            </div>
        </>
    )
}

export default Commande;
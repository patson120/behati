'use client'

import { CustomButton } from "@/components";
import usePayment from "@/hooks/usePayment";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";


const Commande = () => {

    // use payement hook
    const { initializePayment } = usePayment();

    const [payement, setPayement] = useState({
        id: "",
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        pays: "",
        region: "",
        ville: "",
        adresse: "",
        codePostal: "",
        modePaiement: "",
        montant: 0,
        datePaiement: new Date()
    })

    const menus = ['Produits', 'Localisation', 'Payement'];
    const regions = ['Centre', 'Littorale', 'Ouest'];
    const villes = ['Yaoundé', 'Douala', 'Bafoussam'];
    const pays = [
        {
            id: 1,
            name: 'Cameroun',
            codePays: 'CM'
        },
        {
            id: 2,
            name: 'France',
            codePays: 'FR'
        }
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [quantite, setQuantite] = useState(1);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedVille, setSelectedVille] = useState(villes[0]);
    const [quartier, setQuartier] = useState('');

    const handlePayment = () => {

        const body = {
            transaction_id: `${moment.now()}`, // YOUR TRANSACTION ID
            // transaction_id: Math.floor(Math.random() * 100000000).toString(), // YOUR TRANSACTION ID
            amount: 100,
            currency: 'XAF',
            channels: 'ALL',
            description: `Comande de ${quantite}L d'huile de tournesol`,
            //Fournir ces variables pour le paiements par carte bancaire
            customer_name: fullName ?? "Joe",//Le nom du client
            customer_surname: "",//Le prenom du client
            customer_email: "down@test.com",//l'email du client
            customer_phone_number: phoneNumber ?? "088767611",//l'email du client
            customer_address: "BP 0024",//addresse du client
            customer_city: selectedVille ?? "Antananarivo",// La ville du client
            customer_country: "CM",// le code ISO du pays
            customer_state: "CM",// le code ISO l'état
            customer_zip_code: "06510", // code postal
            return_url: "https://behati.vercel.app/commande",
        }

        initializePayment(body)
            .then(res => res.json())
            .then(data => {
                if (data.code === '201' && data.message === "CREATED") {
                    window.location.href = data.data.payment_url;
                }
            })
            .catch(err => {
                alert(err.message);
                console.log({ err: err });
            })
    }

    const handleNextStep = (e: any) => {
        e.preventDefault();
        setSelectedIndex(prev => prev + 1)
    }

    return (
        <>
            <div className="container">
                {/* Section A */}
                <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="pt-5 md:pr-8 order-2 md:order-1 mb-10 md:mb-0">

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

                        <form onSubmit={handleNextStep}>

                            {menus[selectedIndex] === "Produits" && <div>
                                {/* Nom complet */}
                                <span className="text-xs font-medium mb-2 mt-5 block">Votre nom complet</span>
                                <div className="flex rounded-full shadow-sm">
                                    <input type="text" autoComplete="name"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
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
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                                    <input type="number"
                                        value={quantite}
                                        onChange={(e) => { setQuantite(Number(e.target.value)) }}
                                        required
                                        min={1}
                                        className="block flex-1 border-0 bg-transparent rounded-full py-2 px-4 text-gray-900 
                                    ring-1 ring-inset ring-gray-300 focus-within:ring-2 
                                    focus-within:ring-inset focus-within:ring-indigo-600
                                  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Ex: 20 bouteilles (1L)" />
                                </div>

                                <div className="mt-10">
                                    <CustomButton
                                        title={'Suivant'}
                                        type="submit"
                                        containerStyle='primary_green h-11 w-full rounded-full text-sm font-bold px-4'
                                        handleClick={() => { }}
                                    />
                                </div>

                            </div>
                            }

                        </form>

                        <form onSubmit={handleNextStep}>

                            {menus[selectedIndex] === "Localisation" && <div>
                                {/* Select pays */}
                                <span className="text-xs font-medium mb-2 mt-5 block">Pays de livraison</span>
                                <div className="relative">
                                    <select className="block appearance-none w-full border-0 bg-transparent
                             text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight 
                             ring-1 ring-inset ring-gray-300 focus-within:ring-2
                             focus:outline-none bg-white"
                                        id="grid-state">
                                        {
                                            pays.map(pay => <option key={pay.id} value={pay.name}>{pay.name}</option>)
                                        }
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>


                                {/* Select Région */}
                                <span className="text-xs font-medium mb-2 mt-5 block">Région</span>
                                <div className="relative">
                                    <select className="block appearance-none w-full border-0 bg-transparent
                             text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight 
                             ring-1 ring-inset ring-gray-300 focus-within:ring-2
                             focus:outline-none bg-white"
                                        id="grid-state"
                                        onChange={(e) => setSelectedRegion(e.target.value)}
                                    >
                                        {
                                            regions.map((region, index) => <option key={index} value={region}>{region}</option>)
                                        }
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>

                                {/* Select Ville */}
                                <span className="text-xs font-medium mb-2 mt-5 block">Ville</span>
                                <div className="relative">
                                    <select className="block appearance-none w-full border-0 bg-transparent
                             text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight 
                             ring-1 ring-inset ring-gray-300 focus-within:ring-2
                             focus:outline-none bg-white"
                                        id="grid-state"
                                        onChange={(e) => setSelectedVille(e.target.value)}
                                    >
                                        {
                                            villes.map((ville, index) => <option key={index} value={ville}>{ville}</option>)
                                        }
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>


                                {/* Quartier */}
                                <span className="text-xs font-medium mb-2 mt-5 block">Quartier</span>
                                <div className="flex rounded-full shadow-sm">
                                    <input type="text"
                                        value={quartier}
                                        onChange={(e) => { setQuartier(e.target.value) }}
                                        required
                                        className="block flex-1 border-0 bg-transparent rounded-full py-2 px-4 text-gray-900 
                                    ring-1 ring-inset ring-gray-300 focus-within:ring-2 
                                    focus-within:ring-inset focus-within:ring-indigo-600
                                  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Entrez le nom du quartier" />
                                </div>

                                <div className="mt-10">
                                    <CustomButton
                                        title={'Suivant'}
                                        type="submit"
                                        containerStyle='primary_green h-11 w-full rounded-full text-sm font-bold px-4'
                                        handleClick={() => { }}
                                    />
                                </div>
                            </div>}
                        </form>

                        {menus[selectedIndex] === "Payement" && <div>

                            <p className="bg-green-100 p-3 rounded-lg text-xs">
                                Vous avez choisi le <span className="font-bold">Cameroun</span> comme pays de livraison, Orange money et MTN Mobile money sont les moyens de paiements disponibles.
                            </p>
                            <p className="font-bold mt-5 mb-4">Payer avec</p>

                            <button
                                onClick={handlePayment}
                                className="w-full py-2 px-2 
                                border border-gray-300 rounded-full
                                flex flex-row justify-center items-center"
                                type="button">
                                <span className="bg-red-300 rounded-full overflow-hidden mr-2">
                                    <Image
                                        width={40}
                                        height={40}
                                        className="h-7 w-7"
                                        src="/assets/icons/Orange_money.png"
                                        alt="Icon" /></span>
                                <span className="flex flex-1">Orange mobile money</span>
                                <span>
                                    <Image
                                        width={40}
                                        height={40}
                                        className="h-5 w-auto"
                                        src="/assets/icons/arrow-up-right.png"
                                        alt="Icon" /></span>
                            </button>

                            <button
                                onClick={handlePayment}
                                className="w-full py-2 px-2 mt-3
                                border border-gray-300 rounded-full
                                flex flex-row justify-center items-center"
                                type="button">
                                <span className="bg-red-300 rounded-full overflow-hidden mr-2">
                                    <Image
                                        width={40}
                                        height={40}
                                        className="h-7 w-7"
                                        src="/assets/icons/Mtn_momo.png"
                                        alt="Icon" /></span>
                                <span className="flex flex-1">MTN mobile money</span>
                                <span>
                                    <Image
                                        width={40}
                                        height={40}
                                        className="h-5 w-auto"
                                        src="/assets/icons/arrow-up-right.png"
                                        alt="Icon" /></span>
                            </button>

                            <div className="mt-10">
                                <p className="text-xs text-gray-600">Toutes les transactions effectuées sur notre plateformes sont sécurisées</p>
                            </div>
                        </div>}

                        {/* {(selectedIndex !== menus.length - 1) && <div className="mt-10">
                            <CustomButton
                                title={'Suivant'}
                                containerStyle='primary_green h-11 w-full rounded-full text-sm font-bold px-4'
                                handleClick={() => setSelectedIndex(prev => prev + 1)}
                            />
                        </div>} */}
                    </div>
                    <div className="p-0 md:p-10 pt-0 order-1 md:order-2">
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

                </section >

            </div >
        </>
    )
}

export default Commande;
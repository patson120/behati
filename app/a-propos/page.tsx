

'use client'

import { Footer, Header } from '@/components'
import React from 'react'

const Apropos = () => {
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
                ></div>
            </section >


            {/* Section B */}


            {/* Section C */}
            <Footer />
        </div>
    )
}

export default Apropos

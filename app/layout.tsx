
import { Footer, Header } from '@/components'
import '@/styles/globals.css'
import React from 'react'


export const metadata = {
    title: "Behati | Home",
    description: "Behati est une entreprise agroalimentaire qui vous propose des produits 100% bio, cultivés sans engrais dans les hautes montagnes de l\n’ouest Cameroun",
}

type Props = {
    children: React.ReactNode
}

const RoutLayout: React.FC<Props> = ({ children }) => {
    return (

        <html lang='en'>
            <body className=''>
                <main className='main relative'>
                    <Header />
                    <div className='h-[124px]'></div>
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    )
}

export default RoutLayout

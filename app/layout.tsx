
import '@/styles/globals.css'
import React from 'react'


export const metadata = {
    title: "Behati | Home",
    description: "Behati est une entreprise agroalimentaire qui vous propose des produits 100% bio, cultivés sans engrais dans les hautes montagnes de l’ouest Cameroun", 
}

type Props = {
    children:  React.ReactNode
}
 
const RoutLayout: React.FC<Props> = ({ children }) => {
  return (
    
    <html lang='en'>
        <body>
            <main className='main'>
                { children }
            </main>
        </body>
    </html>
  )
}

export default RoutLayout

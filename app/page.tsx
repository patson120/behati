'use client'

import CONSTANTS from "@/utils/constants"
import { collection, getDocs, query } from "firebase/firestore"
import { useLayoutEffect, useState } from "react"

import { Header, Hero } from "@/components"
import { database } from "@/config/firebase"


const Home = () => {

  const [users, setUsers] = useState([])
  const [cars, setCars] = useState<any>([])

  const getData = async () => {

    const data = await fetch(`${CONSTANTS.BASE_URL}/persons`)
    const response = await data.json();
    setUsers(response.users)

    const carsQuery = query(collection(database, "VEHICLE"))
    const querySnapshot = await getDocs(carsQuery)

    setCars([])
    querySnapshot.forEach((doc) => {
      setCars((prev: any) => [...prev, doc.data()])
    })
  }

  useLayoutEffect(() => {
    // getData();
  }, [])


  return (
    <div>
      <section className="">
        <Header />
      </section>
      <Hero />
    </div>
  )
}

export default Home



import axios from 'axios'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import { ModalInfo } from '../components/ModalInfo'
import { Navbar } from '../components/Navbar'

export enum Modal {
  show,
  hide,
}

function MyApp ({ Component, pageProps }: AppProps) {
  const [modal, setModal] = useState(Modal.hide)
  const [pokemonsData, setPokemonsData] = useState([])
  const [pokeTeamData, setPokeTeamData] = useState([])
  
  const getAllPokemons = async () =>{
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=649'
    const { data } = await axios.get(url)
    setPokemonsData(data.results)
  }

  useEffect(()=>{
    getAllPokemons()
    const timer = setTimeout(() => {
      setModal(Modal.show)
    }, 20000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <Navbar/>
      <ModalInfo modal={modal} setModal={() => setModal(m => m === Modal.hide ? Modal.show : Modal.hide)}/>
      <Component {...pageProps} pokemonsData={pokemonsData} pokeTeamData={pokeTeamData}/>
    </>
  )

}
export default MyApp
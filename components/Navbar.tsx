import { useRouter } from 'next/router'
import React from 'react'
import { SiPokemon } from 'react-icons/si'

export const Navbar = () => {
  const router = useRouter()
  const currentPath = router.pathname
  const handleClick = () => {
    if (currentPath !== '/') {
      router.push('/')
    }
  }
  return (
    <div onClick={handleClick} className={'fixed w-screen h-20 bg-white z-20'}>
      <SiPokemon className={'m-auto text-blue-600 w-full h-44 -mt-10 text-10xl'}/>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { PokemonType } from '../pages'

type PokeCardProps = {
  name: PokemonType['name']
  url: PokemonType['url']
  id: string
  pokemonId: number
}
export const PokeCard: React.FC<PokeCardProps> = ({name, url, id, pokemonId}) => {
  return (
    <div key={id} className={'relative max-w-64 sm:h-64 h-32 m-4 p-4 bg-gray-100 list-none rounded-md max-w-xl shadow-sm hover:shadow-lg'}>
      <Link href={`/pokemon?id=${pokemonId}`}>
        <a className={'flex flex-row sm:flex-col h-28 sm:h-48'}>
          <p>{name}</p>
          <Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`} 
            width={200} 
            height={200}
          />
        </a>
      </Link>
      <button name={'close'} className={'absolute flex -bottom-5 -right-5 rounded-full w-10 hover:w-44 group h-10 bg-green-200 hover:bg-green-300 transition ease-out duration-500'}
      >
        <div>
          <p className={'pl-1 m-2 hidden group-hover:inline-flex'}>add to the team</p>
        </div>
        <AiOutlinePlus className={'w-6 h-6 m-2 fill-current text-green-800'}/>
      </button>
    </div>
  )
}

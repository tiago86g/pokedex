import React from 'react'
import { PokemonType } from '../pages/index'
import { PokeCard } from './PokeCard'

type PokeCardsListProps = {
  pokemonsData: PokemonType[]
}

export const PokeCardsList: React.FC<PokeCardsListProps> = ({ pokemonsData }) => {
  const cardList = pokemonsData.map(({ name, url }, index)=>(
    <PokeCard
      id={`${name}${index}`}
      pokemonId = {index + 1}
      name={name}
      url={url}
    />
  ))

  return (
    <ul className={'bg-gray-300'}>
      {cardList === []
        ? <p className='text-center'>There is no Pokemon</p>
        : cardList}    
    </ul>
  )
}

import Image from 'next/image'
import React from 'react'
import { Tag } from './Tag'

export type SinglePokemonProp = any
// {
//   pokemon: {
//     abilities:[]
//     forms:{
//       name:string
//       url:string
//     }[]
//   }
// }

export const PokeOverview:React.FC<SinglePokemonProp> = ({ pokemon }) => {
  const { abilities, height, id, moves, weight, stats } = pokemon
  const titleStyle ='font-bold mt-6'
  return (
    <div className={'flex m-auto w-screen md:max-w-4xl px-6 overflow-x-scroll'}>
      <div className={'flex flex-col justify-center mt-32 mb-6'}>
        {console.log('pokemon', pokemon)}
        <div className={'flex justify-center bg-gray-200 rounded-full h-72 w-72 sm:h-96 sm:w-96 m-auto mb-6 border-8 border-blue-600'}>
          <Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} 
            width={300} 
            height={300}
          />
        </div>
        <h1 className={'font-bold text-4xl capitalize'}>{pokemon.forms[0].name}</h1>
        <p>{`Height: ${height} inch`}</p>
        <p>{`weight: ${weight} g`}</p>

        <h2 className={titleStyle}>{'Stats'}</h2>
        <ul>
          {stats.map((s: { base_stat: string; stat: { name: string } }, index: number) => 
            <li key={index} className={'flex items-center my-2'}>
              <Tag width={'w-8'} color={'bg-green-300 m-1'}>{s.base_stat}</Tag>
              <div className={'uppercase text-xs font-bold'}>{s.stat.name}</div>
            </li>
          )}
        </ul>

        {
          !abilities 
            ? <></> 
            : (
              <>
                <h2 className={titleStyle}>{'Abilities'}</h2>
                <ul>
                  {abilities.map((a: { ability: { name: string } }, index: number) => 
                    <li key={index} className={'inline-grid'}>
                      <Tag width={'max-w-24'}color={'bg-yellow-300 m-1'}>{a.ability.name}</Tag>
                    </li>
                  )}
                </ul>
              </>
            )
        
        }
        
        <h2 className={titleStyle}>{'Moves'}</h2>
        <ul>
          {moves.map((m: { move: { name: string} }, index: number) => 
            <li key={index} className={'inline-grid'}>
              <Tag width={'max-w-24'} color={'bg-purple-300 m-1'}>{m.move.name}</Tag>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

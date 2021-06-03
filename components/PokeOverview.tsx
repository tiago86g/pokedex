import React from 'react'

export type SinglePokemonProp = any
// {
//   pokemon: {
//     ability:[]
//     forms:{
//       name:string
//       url:string
//     }[]
//   }
// }

export const PokeOverview:React.FC<SinglePokemonProp> = ({ pokemon }) => {
  return (
    <div>
      {console.log('pokemon', pokemon)}
      <p>{pokemon.forms[0].name}</p>
    </div>
  )
}

import React from 'react'
import { Layout } from '../components/Layout'
import { PokeCardsList } from '../components/PokeCardsList'
import { SinglePokemonProp } from '../components/PokeOverview'

export type PokemonType = {
  name: string,
  url: string
} 

type PokeHomeProps = {
  pokemonsData: PokemonType[]
  pokeTeamData: SinglePokemonProp
}

const PokeHome: React.FC<PokeHomeProps> = ({
  pokemonsData, pokeTeamData
}) => {

  return (
    <Layout title={'Pokedex'} content={'Pokedex app with all Pokemons'}> 
      {/* {!!pokeTeamData && <PokeTeam />} */}
      <PokeCardsList pokemonsData={pokemonsData}/>
    </Layout>
  )
}

export default PokeHome
import axios from 'axios'
import _ from 'lodash'
import { GetServerSideProps } from 'next'
import React from 'react'
import { Layout } from '../components/Layout'
import { PokeOverview, SinglePokemonProp } from '../components/PokeOverview'

const getSinglePokemon = async (id: string) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  )
  return data
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  //fix it
  if (!_.isString(query.id)) {
    return {props: {}}
  }
  const data = await getSinglePokemon(query.id)
  return {
    props: { data },
  }
}

export const PokemonPage:React.FC<SinglePokemonProp> = ({data}) => {
  return (
    <Layout title={ data.forms[0].name } content={'Pokedex app with all Pokemons'}> 
      <PokeOverview pokemon={data}/>
    </Layout>
  )
}

export default PokemonPage
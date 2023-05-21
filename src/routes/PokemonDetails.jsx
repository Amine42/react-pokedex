import { Flex } from '@chakra-ui/react'

import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const url = 'https://pokeapi.co/api/v2/pokemon/'

const PokemonDetails = () => {
  const { id } = useParams()
  const [status, pokemonData] = useFetch(`${url}${id}/`)

  if (status === 'loading' || status === 'unloaded') {
    return <div>Loading....</div>
  }
  return (
    <Flex h={'100vh'} bgColor={'rgba(255, 255, 255, 0)'}>
      <h1>
        {pokemonData.name}
        {console.log(pokemonData)}
      </h1>
    </Flex>
  )
}

export default PokemonDetails

import { useState } from 'react'
import { SimpleGrid, Button, Flex } from '@chakra-ui/react'
import useFetch from './hooks/useFetch'
import PokemonCard from './components/PokemonCard'

const App = () => {
  const [status, pokemonList] = useFetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  )
  const [page, setPage] = useState(1)
  const displayPerPage = 15

  const nextPage = () => {
    setPage(page + 1)
  }

  if (status === 'loading' || status === 'unloaded') {
    return <div>Loading....</div>
  }

  return (
    <Flex wrap={'wrap'} justify={'center'} w={'100%'}>
      <SimpleGrid columns={[1, 2, 3, 4]}>
        {pokemonList.results.slice(0, displayPerPage * page).map((pokemon) => (
          <Flex mx={'2rem'} key={pokemon.url} value={pokemon.name}>
            <PokemonCard url={pokemon.url} />
          </Flex>
        ))}
      </SimpleGrid>
      <Flex justify={'center'} m={'1.5rem'} mb={'2.5rem'} w={'100%'}>
        <Button onClick={() => nextPage()}>Load more</Button>
      </Flex>
    </Flex>
  )
}

export default App

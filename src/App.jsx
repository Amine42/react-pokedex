import useFetch from './hooks/useFetch'
import PokemonList from './components/PokemonList'

const App = () => {
  const [status, pokemonList] = useFetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  )

  if (status === 'loading' || status === 'unloaded') {
    return <div>Loading....</div>
  }

  return <PokemonList pokemonList={pokemonList.results.slice(0, 1008)} />
}

export default App

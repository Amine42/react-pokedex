import { useState, useEffect } from 'react'

const App = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonsDetails, setPokemonDetails] = useState([])
  const [pokemonToDisplay, setPokemonToDisplay] = useState([])
  const [page, setPage] = useState(0)
  const displayPerPage = 20

  useEffect(() => {
    requestPokemonList()
  }, [])

  const requestPokemonList = async () => {
    try {
      const res = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      )
      const json = await res.json()

      setPokemonList(json.results)
      requestPokemonDetails(
        json.results.slice(page * displayPerPage, displayPerPage * (page + 1))
      )
      setPage((page) => page + 1)
    } catch (error) {
      console.log(error)
    }
  }

  const requestPokemonDetails = async (pokemonsUrl) => {
    try {
      pokemonsUrl.map(async (item) => {
        const res = await fetch(item.url)
        const json = await res.json()

        setPokemonDetails((pokemonsData) => {
          pokemonsData = [...pokemonsData, json]
          pokemonsData.sort((a, b) => (a.id > b.id ? 1 : -1))
          return pokemonsData
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  const nextPage = () => {
    setPokemonToDisplay(
      pokemonList.slice(page * displayPerPage, displayPerPage * (page + 1))
    )
    requestPokemonDetails(pokemonToDisplay)
    setPage((page) => page + 1)
  }

  return (
    <>
      <ul>
        {pokemonsDetails.map((pokemon) => (
          <li key={pokemon.name} value={pokemon.id}>
            <p>
              name: {pokemon.name} ID: {pokemon.id}
            </p>
          </li>
        ))}
      </ul>
      <button onClick={() => nextPage()}>Load more</button>
    </>
  )
}

export default App

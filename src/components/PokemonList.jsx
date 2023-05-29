import { useState, useEffect } from 'react'
import { Button, Flex, Select, Box, Input } from '@chakra-ui/react'
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemonList }) => {
  const [sortedPokemonList, setSortedPokemonList] = useState([])
  const [sortType, setSortType] = useState('numberAscending')
  const [searchInput, setSearchInput] = useState('')
  const [page, setPage] = useState(1)
  const displayPerPage = 15

  useEffect(() => {
    if (sortType === 'numberAscending') {
      setSortedPokemonList(sortArrayNumberAscending(pokemonList))
    } else if (sortType === 'numberDescending') {
      setSortedPokemonList(sortArrayNumberAscending(pokemonList).reverse())
    } else if (sortType === 'alphaAscending') {
      setSortedPokemonList(sortArrayAlphaAscending(pokemonList))
    } else if (sortType === 'alphaDescending') {
      setSortedPokemonList(sortArrayAlphaAscending(pokemonList).reverse())
    }
  }, [sortType])

  const sortArrayAlphaAscending = (arr) => {
    const res = [...arr].sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }

      return 0
    })

    return res
  }

  const sortArrayNumberAscending = (arr) => {
    const res = [...arr].sort((a, b) => {
      const numA = Number(a.url.split('/').slice(-2, -1))
      const numB = Number(b.url.split('/').slice(-2, -1))

      return numA - numB
    })

    return res
  }

  const filteredList = sortedPokemonList.filter((e) => {
    if (searchInput === '') {
      return e
    } else {
      return (
        e.name.includes(searchInput) ||
        e.url.split('/').slice(-2, -1).includes(searchInput)
      )
    }
  })

  const nextPage = () => {
    setPage(page + 1)
  }

  // KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA
  document.body.style.background =
    'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'

  if (!sortedPokemonList) {
    return <div>Loading....</div>
  }

  return (
    <Flex wrap={'wrap'} justify={'center'} w={'100%'}>
      <Flex justify={'space-around'} w={'100%'} m={'2rem 10rem 0 10rem'}>
        <Flex>
          <Select
            onChange={(e) => {
              setSortType(e.target.value)
            }}
          >
            <option value="numberAscending">ID croissant</option>
            <option value="numberDescending">ID decroissant</option>
            <option value="alphaAscending">Alphabetique A-Z</option>
            <option value="alphaDescending">Alphabetique Z-A</option>
          </Select>
        </Flex>
        <Flex>
          <Input
            placeholder="Search"
            onChange={(e) => {
              setSearchInput(e.target.value.toLowerCase())
            }}
          />
        </Flex>
      </Flex>
      <Box display={'flex'} w={'100%'}>
        <Flex wrap={'wrap'} w={'100%'} justify={'center'}>
          {!filteredList.slice()[0] && <h1>Aucun resultat</h1>}
          {filteredList.slice(0, displayPerPage * page).map((pokemon) => (
            <Flex
              w={{ sm: '100%', md: '40%', lg: '25%', xl: '19%' }}
              mx={'2rem'}
              justify={'center'}
              key={pokemon.url}
              value={pokemon.name}
            >
              <PokemonCard url={pokemon.url} />
            </Flex>
          ))}
        </Flex>
      </Box>
      <Flex justify={'center'} m={'1.5rem'} mb={'2.5rem'} w={'100%'}>
        <Button onClick={() => nextPage()}>Load more</Button>
      </Flex>
    </Flex>
  )
}

export default PokemonList

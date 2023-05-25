import { Heading, Image, Box, Center, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const url = 'https://pokeapi.co/api/v2/pokemon/'

const PokemonDetails = () => {
  const { id } = useParams()
  const [status, pokemonData] = useFetch(`${url}${id}/`)
  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
    ice: '#96D9D6',
    steel: '#B7B7CE',
    dark: '#705746',
    ghost: '#735797',
  }

  if (status === 'loading' || status === 'unloaded') {
    return <div>Loading....</div>
  }
  // KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA KAKA
  document.body.style.background = `linear-gradient(-45deg, ${
    colors[pokemonData.types[0].type.name]
  }, ${
    colors[pokemonData?.types[1]?.type?.name || pokemonData.types[0].type.name]
  })`

  return (
    // <Flex minH={'100vh'} bgColor={'rgba(255, 255, 255, 0)'}>
    <Center w={'100%'}>
      <Box
        bg={'white'}
        textAlign={'center'}
        borderRadius={'16px'}
        padding={'3rem'}
        margin={'3rem 1rem'}
      >
        <Heading
          as="h1"
          w={'100%'}
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Text>{pokemonData.name}</Text>
          <Text>#{pokemonData.id}</Text>
        </Heading>
        <Center w={'100%'}>
          <Image
            h={'300px'}
            alt="pokemon image"
            src={pokemonData.sprites.front_default}
          />
        </Center>
        <Text display={'inline-block'} fontWeight={'bold'}>
          Type:
        </Text>
        <Text
          display={'inline-block'}
          m={'0 0.5rem'}
          bgColor={colors[pokemonData?.types[0]?.type?.name]}
          padding={'0.3rem 0.7rem'}
          borderRadius={'0.3rem 0.7rem'}
          fontWeight={'bold'}
        >
          {pokemonData?.types[0]?.type?.name}
        </Text>
        {pokemonData?.types[1]?.type?.name && (
          <Text
            display={'inline-block'}
            bgColor={colors[pokemonData?.types[1]?.type?.name]}
            padding={'0.3rem 0.7rem'}
            borderRadius={'0.3rem 0.7rem'}
            fontWeight={'bold'}
          >
            {pokemonData?.types[1]?.type?.name}
          </Text>
        )}
      </Box>
    </Center>
  )
}

export default PokemonDetails
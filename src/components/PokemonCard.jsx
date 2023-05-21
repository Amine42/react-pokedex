import { Box, Center, Heading, Text, Stack, Image } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const PokemonCard = ({ url }) => {
  const [status, pokemonData] = useFetch(url)

  const colors = {
    fire: '#FDDFDF 50%',
    grass: '#DEFDE0 50%',
    electric: '#FCF7DE 50%',
    water: '#DEF3FD 50%',
    ground: '#f4e7da 50%',
    rock: '#d5d5d4 50%',
    fairy: '#fceaff 50%',
    poison: '#98d7a5 50%',
    bug: '#f8d5a3 50%',
    dragon: '#97b3e6 50%',
    psychic: '#eaeda1 50%',
    flying: '#F5F5F5 50%',
    fighting: '#E6E0D4 50%',
    normal: '#F5F5F5 50%',
    ice: '#96D9D6 50%',
    steel: '#B7B7CE 50%',
    dark: '#705746 50%',
    ghost: '#735797 50%',
  }

  if (status === 'loading' || status === 'unloaded') {
    return <div>Loading....</div>
  }
  return (
    <RouteLink to={`pokemon/${pokemonData.id}`}>
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bgGradient={`linear(to-tr, ${
            colors[pokemonData.types[0].type.name]
          }, ${
            colors[
              pokemonData?.types[1]?.type?.name ||
                pokemonData.types[0].type.name
            ]
          })`}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${pokemonData.sprites.front_default})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={pokemonData.sprites.front_default}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}
            >
              #{pokemonData.id}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {pokemonData.name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              {pokemonData?.types[0]?.type?.name && (
                <Text color={'gray.600'}>{pokemonData.types[0].type.name}</Text>
              )}
              {pokemonData?.types[1]?.type?.name && (
                <Text color={'gray.600'}>{pokemonData.types[1].type.name}</Text>
              )}
            </Stack>
          </Stack>
        </Box>
      </Center>
    </RouteLink>
  )
}

export default PokemonCard

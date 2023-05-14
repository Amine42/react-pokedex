import { useRouteError } from 'react-router-dom'
import { Flex, Heading, Text, Center } from '@chakra-ui/react'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <Flex justify="center" align="center" h="100vh">
      <Flex wrap="wrap">
        <Center w="100%">
          <Heading bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
            Oops!
          </Heading>
        </Center>
        <Center w="100%">
          <Text>Sorry, an unexpected error has occurred.</Text>
        </Center>
        <Center w="100%">
          <Text>
            <i>{error.statusText || error.message}</i>
          </Text>
        </Center>
      </Flex>
    </Flex>
  )
}

export default ErrorPage

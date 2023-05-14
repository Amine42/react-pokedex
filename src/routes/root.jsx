import { Outlet, Link as RouteLink } from 'react-router-dom'
import { Flex, Image } from '@chakra-ui/react'
import logo from '../assets/logo.svg'

const Root = () => {
  return (
    <>
      <Flex justifyContent="center" margin="1rem">
        <RouteLink to="/">
          <Image src={logo} alt="pokemon logo" h="4rem" />
        </RouteLink>
      </Flex>
      <Outlet />
    </>
  )
}

export default Root

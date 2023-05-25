import { Outlet, Link as RouteLink } from 'react-router-dom'
import { Flex, Image } from '@chakra-ui/react'
import logo from '../assets/logo.svg'
// import bgImage from '../assets/1.png'

const Root = () => {
  return (
    // <Flex
    //   backgroundImage={bgImage}
    //   backgroundAttachment={'fixed'}
    //   backgroundPosition={'center'}
    //   wrap={'wrap'}
    // >
    <Flex wrap={'wrap'}>
      <Flex w={'100%'} justifyContent="center" margin="1rem" mt="2.5rem">
        <RouteLink to="/">
          <Image src={logo} alt="pokemon logo" h="4rem" />
        </RouteLink>
      </Flex>
      <Outlet />
    </Flex>
  )
}

export default Root

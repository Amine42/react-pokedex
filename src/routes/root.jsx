import { Outlet, Link as RouteLink } from 'react-router-dom'
import { Flex, Image } from '@chakra-ui/react'
import logo from '../assets/logo.svg'
// import bgImage from '../assets/1.png'

const Root = () => {
  // document.body.style.background =
  //   'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'

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

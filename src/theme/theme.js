import { extendTheme } from '@chakra-ui/react'

const theme = {
  styles: {
    global: {
      body: {
        bg: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        bgAttachement: 'fixed',
        bgRepeat: 'no-repeat',
        minH: '100vh',
      },
    },
  },

  colors: {
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
  },
}

export default extendTheme(theme)

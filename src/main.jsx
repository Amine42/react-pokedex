import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import theme from './theme/theme'
import Root from './routes/root'
import ErrorPage from './routes/error-page'
import PokemonDetails from './routes/PokemonDetails'
import App from './App'

const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<App />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
)

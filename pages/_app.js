import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { AuthProvider } from '../lib/auth'
import theme from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <AuthProvider>
          <CSSReset />
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default App
// import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { AuthProvider } from '../lib/auth'
// import theme from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
// import { Global, css } from '@emotion/react'

// const GlobalStyle = ({ children }) => {

//   return (
//     <>
//       <Global
//         styles={css`
//           html {
//             min-width: 380px;
//             scroll-behavior: smooth;
//           }
//           #__next {
//             display: flex;
//             flex-direction: column;
//             min-height: 100vh;
//           }
//           `}
//       />
//       {children}
//     </>
//   )
// }


const App = ({ Component, pageProps }) => {
  return (
    // <ThemeProvider theme={theme}>
    <ChakraProvider>
      <AuthProvider>
        {/* <GlobalStyle /> */}
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
    // </ThemeProvider>

  )
}

export default App
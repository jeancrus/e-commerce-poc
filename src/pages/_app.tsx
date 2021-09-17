import FullscreenLoader from 'components/FullscreenLoader'
import Header from 'components/Header'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Provider, { initialState } from 'provider'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider {...pageProps} value={initialState.state}>
        <Head>
          <title>React Avançado - Boilerplate</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
        </Head>
        <Header />

        <GlobalStyles />
        <Component {...pageProps} />
        <ToastContainer autoClose={3000} />
        <FullscreenLoader />
      </Provider>
    </ThemeProvider>
  )
}

export default App

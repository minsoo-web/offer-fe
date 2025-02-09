import { OfferStyleProvider, theme as offerTheme } from '@offer-ui/react'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { initMocks } from '../mocks'
import { theme } from '@styles'

const customTheme = {
  ...offerTheme,
  ...theme
}

initMocks()

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <OfferStyleProvider theme={customTheme}>
      <Component {...pageProps} />
    </OfferStyleProvider>
  )
}

export default App

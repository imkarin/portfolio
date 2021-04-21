import { ThemeProvider } from 'next-themes'
import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider storageKey='themey'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
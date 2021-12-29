import '../styles/globals.css'
import Layouts from './Layouts'
import '@fortawesome/fontawesome-free/css/all.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
  
}

export default MyApp

import '../styles/globals.css'
import Layouts from './Layouts'
import Head from 'next/head'
import '@fortawesome/fontawesome-free/css/all.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DICOMES</title>
        <link rel='icon' href='/utp.jpg'/>
      </Head>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
    
  )
  
}

export default MyApp

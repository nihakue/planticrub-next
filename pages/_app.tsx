import '../lib/styles/globals.css'
import { AppContext } from '../lib/hooks/appContext'


function MyApp({ Component, pageProps }) {
  const context = {
    contact: pageProps.contact
  }
  return <AppContext.Provider value={context}><Component {...pageProps} /></AppContext.Provider>
}

export default MyApp

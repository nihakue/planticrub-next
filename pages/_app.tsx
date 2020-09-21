import '../styles/tailwind.css';
import { AppContext } from '../lib/hooks/appContext'


function MyApp({ Component, pageProps }) {
  return <AppContext.Provider value={pageProps.appContext}><Component {...pageProps} /></AppContext.Provider>
}

export default MyApp

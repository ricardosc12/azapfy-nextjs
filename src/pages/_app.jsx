import '@/styles/globals.css'
import Navbar from '@/layouts/Navbar'

export default function App({ Component, pageProps }) {  
	return (
		<>
			{Component.nav===true?
			(
				<Navbar><Component {...pageProps} /></Navbar>
				
			):<Component {...pageProps} />}
		</>
	)
  }
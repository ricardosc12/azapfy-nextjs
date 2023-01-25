import '@/styles/globals.css'
import Navbar from '@/layouts/Navbar'
import Head from 'next/head'

export default function App({ Component, pageProps }) {  
	return (
		<>
			<Head><title>Azapfy - Velocidade para fazer</title></Head>
			{Component.nav===true?
			(
				<Navbar><Component {...pageProps} /></Navbar>
				
			):<Component {...pageProps} />}
			
		</>
		
	)
  }
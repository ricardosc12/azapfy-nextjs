import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='h-full bg-gray-50'>
      <Head title='Azapfy - Velocidade para fazer'/>
      <body className='h-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

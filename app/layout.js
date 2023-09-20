import '@styles/globals.css' ;

import Nav from '@components/Nav'
import Footer from '@components/Footer';
export const metadata = {
  title: "Apna College",
  description: "A place where students can find best way to proceed in their carriers",
  icons: {
    icon: "/app/favicon.ico",
  },
} 
const RootLayout = ({children}) => {
  return (
   <html lang='eng'>
    <body>
      <main className='lg:w-3/4 w-full m-auto '>
        <Nav />
        {children}
        <Footer />
      </main>
    </body>
   </html>
  )
}

export default RootLayout
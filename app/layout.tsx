import Header from "./Header"
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
        <head />
      <body className='bg-gray-100 
      duration-700 '>
        <Header/>
        <div className='max-w-6xl mx-auto'>
          {children}
          </div>
        </body>
    </html>
  )
}

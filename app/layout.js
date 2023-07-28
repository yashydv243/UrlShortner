import './globals.css'
import Navbar from '@/component/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Navbar />
          {children}
      </body>
    </html>
  )
}

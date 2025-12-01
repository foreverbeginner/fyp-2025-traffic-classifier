import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnalyticsClient from '../components/AnalyticsClient'

export const metadata = {
  title: 'Digital Marketing FYP',
  description: 'FYP demo site for network traffic classifier'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsClient />
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

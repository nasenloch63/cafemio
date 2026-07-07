import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Poppins } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Eiscafé Mio Hessisch Lichtenau – Eis, Frühstück & Café',
  description:
    'Eiscafé Mio in Hessisch Lichtenau: hausgemachtes italienisches Eis, herzhaftes Frühstück, Fingerfood und gemütliches Café-Ambiente. Täglich 8:30–21:00 Uhr geöffnet.',
  keywords: [
    'Eiscafé Mio',
    'Eis Hessisch Lichtenau',
    'Eisdiele',
    'Frühstück',
    'Spaghetti-Eis',
    'italienisches Eis',
    'Café',
  ],
  openGraph: {
    title: 'Eiscafé Mio Hessisch Lichtenau – Eis, Frühstück & Café',
    description:
      'Hausgemachtes italienisches Eis, herzhaftes Frühstück und gemütliches Café-Ambiente in Hessisch Lichtenau.',
    type: 'website',
    locale: 'de_DE',
  },
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/media/logo.jpg' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f1e6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${fraunces.variable} ${poppins.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

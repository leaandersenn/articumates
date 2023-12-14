'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Provider } from 'react-redux'
import { store } from '@/app/_redux/store'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Header from './components/Header/Header'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider store={store}>
          <Providers>
              <Header />
              <main>{children}</main>
          </Providers>
        </Provider>
      </body>
    </html>
  )
}
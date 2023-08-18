import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import * as React from 'react'
import { NextUiProvider } from '@/app/providers/next-ui'
import { ThemeProvider } from '@/app/providers/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Twitter',
  description: 'Clone of Twitter built with Next.js'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${inter.className} bg-slate-50 dark:bg-[#0d1117]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextUiProvider>
            {children}
          </NextUiProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

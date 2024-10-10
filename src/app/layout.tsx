import type { Metadata } from 'next'
import './globals.css'
import '@mantine/core/styles.css'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'

export const metadata: Metadata = {
  title: 'To-Do App',
  description: 'Use a LLM to create tasks'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
      </body>
    </html>
  )
}

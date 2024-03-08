import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter as FontSans } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider.tsx"

import { cn } from "../lib/utils"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
    >
      <main
        className={cn(
        "bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

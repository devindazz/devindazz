import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ColorProvider } from "./color-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Devinda's Portfolio",
  description: "Software Engineering Student Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ColorProvider>{children}</ColorProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


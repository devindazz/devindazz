import type React from "react"
import "../styles/globals.css";

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Devinda - Software Engineer Student",
  description: "Personal portfolio of Devinda, a software engineer student",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


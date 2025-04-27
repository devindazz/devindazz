import "@/styles/globals.css";

import type React from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Devinda Wijesinghe",
  description: "Personal Portfolio of Devinda - A Software Engineer Student",
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

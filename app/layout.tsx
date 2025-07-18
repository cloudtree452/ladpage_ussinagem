import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster" // Import Toaster component

export const metadata: Metadata = {
  title: "USINNER",
  description: "USINNER - Precisão que transforma metal em excelência",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster /> {/* Add Toaster component here */}
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import ScrollToTop from "@/components/scroll-to-top"
import QuotePopup from "@/components/quote-popup"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Craig Iredia | Website & Mobile Application Designer",
  description:
    "Portfolio of Craig Iredia, a creative and results-driven website designer with 5+ years of experience in crafting user-centered and visually appealing websites.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <ScrollToTop />
          <QuotePopup />
        </ThemeProvider>
      </body>
    </html>
  )
}

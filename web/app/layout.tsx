import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@/components/other/analytics"
import Provider from "./provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Prisoner's dilemma",
  description: "Prisoner's dilemma arena to oppose different strategies",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`
          antialiased min-h-screen
          bg-white dark:bg-black
          text-slate-900 dark:text-slate-50
          ${inter.className}`}>
        <Provider>
          <main className="flex items-center justify-center">{children}</main>
        </Provider>
        <Analytics />
      </body>
    </html>
  )
}

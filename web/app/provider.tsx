"use client"

import { ThemeProvider } from "@/components/other/theme-provider"
import ServerStatus from "@/components/other/server-status"
import { NextUIProvider } from "@nextui-org/react";

export interface ProvidersProps {
    children: React.ReactNode;
  }

export default function RootLayout({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NextUIProvider>
      {children}
      </NextUIProvider>
      <ServerStatus />
    </ThemeProvider>
  )
}
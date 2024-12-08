"use client"

import { ThemeProvider } from "@/components/other/theme-provider"
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
    </ThemeProvider>
  )
}
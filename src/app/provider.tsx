'use client'

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes'

// The props for your component will be typed
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider attribute="class" {...props}>{children}</NextThemesProvider>
}
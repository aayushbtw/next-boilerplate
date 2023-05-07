"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Icons } from "@/components/icons"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className="inline-flex"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icons.sun className="dark:hidden" />
      <Icons.moon className="hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

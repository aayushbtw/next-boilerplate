import { Config } from "tailwindcss"

import { tailwindConfig } from "./src/config/tailwind"

const config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  plugins: [tailwindConfig],
} satisfies Config

export default config

import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

export const tailwindConfig = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "222.2 47.4% 11.2%",
      },
      ".dark": {
        "--background": "224 71% 4%",
        "--foreground": "213 31% 91%",
      },
    })
  },
  {
    darkMode: ["class"],
    theme: {
      extend: {
        colors: {
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
        },
      },
    },
  }
)

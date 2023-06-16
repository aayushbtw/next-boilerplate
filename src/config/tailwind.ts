import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

export const tailwindConfig = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--bg-primary": "250 250 250",
        "--text-primary": "0 0 0",
      },
      ".dark": {
        "--bg-primary": "26 26 26",
        "--text-primary": "255 255 255",
      },
      body: {
        "@apply bg-primary font-sans text-primary": {},
      },
    })
  },
  {
    darkMode: ["class"],
    theme: {
      extend: {
        backgroundColor: {
          primary: "rgb(var(--bg-primary))",
        },
        textColor: {
          primary: "rgb(var(--text-primary))",
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
        },
      },
    },
  }
)

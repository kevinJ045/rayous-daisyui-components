/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  "theme": {
    "extend": {}
  },
  daisyui: {
    themes: [
      {
        catppuccinMocha: {
          "primary": "#eba0ac",
          "secondary": "#cba6f7",
          "accent": "#fab387",
          "neutral": "#1e1e2e",
          "base-100": "#11111b",
          "info": "#89dceb",
          "success": "#a6e3a1",
          "warning": "#f9e2af",
          "error": "#f38ba8",
        },
      },
    ],
  },
  "plugins": [
	  require('daisyui'),
  ]
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          white: '#ffffff',
          purple: '#74247A',
          'light-blue': '#69D3FA',
          'light-green': '#5CF1A4',
          yellow: '#FFC700',
          gray: '#303030',
        },
      },
    },
  },
  plugins: [],
}


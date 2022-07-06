/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './app.vue',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    // "./nuxt.config.{js,ts}",
  ],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        gray: colors.warmGray,
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        cerulean: {
          400: '#006F91',
          800: '#004665',
        },
        cyan : {
         400: '#22D3EE',}
        },
        teal : {
          400: '#0D9488',
          700: '#0F766E'
        },
        emerald : {
        400: '#34D399'
        }
    },
  },
  plugins: [],
}


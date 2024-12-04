/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './src/*.css',
  ],
  theme: {
    extend: {
      boxShadow: {
        'pink-glow': '0 0 10px #db2777, 0 0 20px #db2777',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: 'slide 15s linear infinite',
      },
      colors: {
        cerulean: {
          400: '#006F91',
          800: '#004665',
        },
        cyan : {
         400: '#22D3EE',
          950: '#083344',
        }
        },
        teal : {
          400: '#0D9488',
          700: '#0F766E'
        },
        emerald : {
        400: '#34D399'
        },
        pink : {
        900: '#881337',
        800: '#9d174d',
        700: '#be123c',
        600: '#db2777',
        500: '#ec4899',
        400: '#f472b6',
        300: '#f9a8d4'
        },
        shenPink: '#9d1d50',
        pinks : {
        400: '#f9256d',
        200: '#9c3993'
        },

        purple : {
        400: '#e879f9',
        500: '#d946ef'
        },
        blue : {
        950: '#191a2f',
        900: '#1e3a8a',
        800: '#1e40af',
        700: '#1d4ed8'
      }
    },
  },
  plugins: [],
}


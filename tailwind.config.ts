// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sam: ['sam', ...defaultTheme.fontFamily.sans],
 
      },
      animation: {

      marquee: 'marquee 25s linear infinite',

    },

    keyframes: {

      marquee: {

        '0%': { transform: 'translateX(0%)' },

        '100%': { transform: 'translateX(-100%)' },

      }

    },
    },
  },
  plugins: [],
}

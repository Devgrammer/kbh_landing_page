// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sam: ['sam', ...defaultTheme.fontFamily.sans],
 
      },
    },
  },
  plugins: [],
}

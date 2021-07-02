module.exports = {
  mode: 'jit',
   purge: [
     './dist/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
   ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        sm:"13px"
      },

          fontFamily: {
        sans: ['Lato'],
        serif: ['Open Sans']
      },
      colors: {
        'dark': "#181a1D",
        'blueish':"#319DB5",
        'primary': '#00a2d9',
        'light': '#e9e9e9',
        'light-blue':'#1F3649'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

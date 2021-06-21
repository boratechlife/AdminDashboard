module.exports = {
  mode: 'jit',
   purge: [
     './dist/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
   ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark': "#181a1d",
        'primary': '#00a2d9',
        'light' :'#e9e9e9'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

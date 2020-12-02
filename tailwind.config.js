module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: ['Gilroy Bold', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

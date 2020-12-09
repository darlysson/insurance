module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: {
          dark: '#2d2640',
          light: '#95a9c6',
          veryDark: '#2b272f',
        },

        gray: {
          darkGray: '#837d87',
          veryLightGray: '#fafafa'
        }
      },
      fontFamily: {
        body: ['Karla'],
        heading: ['DM Serif Display']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

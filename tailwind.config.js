module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(18rem, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(18rem, 1fr))',
        'auto-fill-mobile': 'repeat(auto-fill, minmax(10rem, 1fr))',

      },
      fontSize: {
        '10xl': '.24rem',
      }
    },
  },
  variants: {
    extend: {
      height: ['hover', 'focus', 'group-hover'],
      opacity: ['hover', 'focus', 'group-hover'],
      zIndex: ['hover', 'active', 'group-hover'],
      width: ['hover', 'active', 'group-hover'],
      display: ['hover', 'active', 'group-hover'],
    },
  },
  plugins: [],
}

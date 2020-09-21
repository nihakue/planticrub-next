module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // TODO: Figure out why this is purging things I actually want
  // purge: [
  //   './pages/**/*.{js,jsx,ts,tsx}',
  //   './components/**/*.{js,jsx,ts,tsx}'
  // ],
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}

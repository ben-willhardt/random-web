module.exports = {
  // add this section
  content: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm-height': {'raw': '(max-height: 500px)'}
      }
    },
  },
  variants: {
    extend: {},
  },
  safelist: [
    {
      pattern: /opacity-50/
    },
  ],
  plugins: [],
}
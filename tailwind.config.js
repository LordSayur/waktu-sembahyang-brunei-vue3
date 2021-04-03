module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      first: 'var(--first-color)',
      second: 'var(--second-color)',
      third: 'var(--third-color)',
      fourth: 'var(--fourth-color)',
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-text-color)',
      divider: 'var(--divider-color)',
      icon: 'var(--icon-color)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

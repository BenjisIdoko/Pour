/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '980px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
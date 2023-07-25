/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
            container: {
              center: true,
              screens: {
                md: '690px',
                lg: '820px',
                xl: '1080px',
                '2xl': '1440px',
              },
            },
      extend: {},
    },
    plugins: [],
  }
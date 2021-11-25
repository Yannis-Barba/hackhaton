module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#232323',
        secondary: '#1b1b1b',
        third: '#FAF9F5',
        four: '#5A2C81',
      },
      spacing: {
        500: '500px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

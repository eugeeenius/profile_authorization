const colors = require('tailwindcss/colors');

module.exports = {
  plugins: {
    tailwindcss: {
      darkMode: 'class',
      theme: {
        colors: {
          gray: colors.gray,
          red: colors.red,
        },
      },
    },

    autoprefixer: {},
  },
};

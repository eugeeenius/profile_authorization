const colors = require('tailwindcss/colors');

module.exports = {
  plugins: {
    tailwindcss: {
      darkMode: 'class',

      theme: {
        colors: {
          //           transparent: 'transparent',
          //           current: 'currentColor',
          //           black: colors.black,
          //           white: colors.white,
          gray: colors.trueGray,
          //           indigo: colors.indigo,
          //           red: colors.rose,
          //           yellow: colors.amber,
        },
      },
    },

    autoprefixer: {},
  },
};

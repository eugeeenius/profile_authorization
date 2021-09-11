module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/assets/scss/shared/_variables.scss";
          `,
      },
    },
  },
};

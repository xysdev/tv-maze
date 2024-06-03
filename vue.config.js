const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map',
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/variables/all.scss";
          @import "@/styles/mixins/all.scss";
        `,
      },
    },
  },
});

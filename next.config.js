const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  webpack: (config, { nextRuntime }) => {
    config.plugins.push(new VanillaExtractPlugin());
    if (!nextRuntime) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        styles: {
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        },
      };
    }
    return config;
  },
};
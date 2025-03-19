const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.plugins.push(new VanillaExtractPlugin());
    return config;
  },
  experimental: {
    appDir: true,
  },
};
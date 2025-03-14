const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{
      source: '/',
      destination: '/home',
      permanent: true
    }]
  },
  webpack: (config) => {
    config.plugins.push(createVanillaExtractPlugin());
    return config;
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
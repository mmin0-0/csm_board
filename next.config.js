const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZER === 'true',
});

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    const cssRules = config.module.rules.find((rule) => Array.isArray(rule.oneOf)).oneOf;

    cssRules.forEach((rule) => {
      if (rule.test?.test?.('.vanilla.css')) {
        if (dev && !isServer) {
          if (Array.isArray(rule.use)) {
            rule.use = rule.use.map((loader) => {
              if (typeof loader === 'object' && loader.loader?.includes('mini-css-extract-plugin')) {
                return {
                  loader: require.resolve('style-loader'),
                  options: {
                    injectType: 'singletonStyleTag',
                    // insert 옵션을 문자열로 변경
                    insert: '#__next_css__DO_NOT_USE__',
                    attributes: {
                      'data-vanilla-extract': '',
                    },
                  },
                };
              }
              return loader;
            });
          } else if (typeof rule.use === 'object') {
            if (rule.use.loader?.includes('mini-css-extract-plugin')) {
              rule.use = {
                loader: require.resolve('style-loader'),
                options: {
                  injectType: 'singletonStyleTag',
                  insert: '#__next_css__DO_NOT_USE__',
                  attributes: {
                    'data-vanilla-extract': '',
                  },
                },
              };
            }
          }
        }
      }
    });
    return config;
  },
};

module.exports = withBundleAnalyzer(withVanillaExtract(nextConfig));
const path = require('path');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

module.exports = {};

// module.exports = withBundleAnalyzer({});

// module.exports = withImages({
//   esModule: true
// });

const NextAppConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  trailingSlash: true,
  basePath: '/zenite-front'
};

/* Export declaration */
module.exports = withPlugins(
  [
    [
      withImages({
        esModule: true,
        assetPrefix: 'https://glaydsonp.com/zenite-front',
        webpack(config, options) {
          return config;
        }
      })
    ]
  ],
  NextAppConfig
);

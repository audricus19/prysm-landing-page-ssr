module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      issuer: /\.(js|ts)x?$/,
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [{ removeViewBox: false }],
            },
          },
        },
      ],
    });

    return config;
  },
};

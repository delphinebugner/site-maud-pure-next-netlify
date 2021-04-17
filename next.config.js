module.exports = {
  pageExtensions: ["tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.md$/,
          use: "frontmatter-markdown-loader",
        },
      ]
    );
    return config;
  },
};

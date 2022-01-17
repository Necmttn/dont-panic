const withTM = require("next-transpile-modules")([
  "@dont-panic/ui", 
  "@dont-panic/mdx"
]);

module.exports = withTM({
  reactStrictMode: true,
  webpack:(config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config
  }, 
});

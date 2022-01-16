const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  webpack:(config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // if (!isServer) {
    //   config.resolve.fallback.fs = false;
    //   config.resolve.fallback.child_process = false;
    // }
    return config
  }, 
});

const Dotenv = require("dotenv-webpack");

module.exports = module.exports = {
  webpack: (config, env) => ({
    ...config,
    plugins: [
      ...config.plugins,
      new Dotenv({
        safe: true,
        allowEmptyValues: false,
        systemvars: false,
        silent: false,
      }),
    ],
  }),
};

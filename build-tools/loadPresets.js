const { merge } = require("webpack-merge");

const applyPresets = (env) => {
  const { presets } = env;
  if (presets) {
    /** @type {string[]} */
    const mergedPresets = [].concat(...[presets]);

    const mergedConfigs = mergedPresets.map((preset) =>
      require(`./presets/webpack.${preset}`)(env)
    );

    return merge({}, ...mergedConfigs);
  }
  return {};
};

module.exports = applyPresets;

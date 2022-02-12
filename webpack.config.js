const { makeConfig } = require('@anansi/webpack-config');

const options = {
  basePath: 'src',
  buildDir: 'dist/',
  htmlOptions: { title: 'temp', scriptLoading: 'defer', template: 'index.ejs' },
  globalStyleDir: 'style',
};

const generateConfig = makeConfig(options);

module.exports = (env, argv) => {
  const config = generateConfig(env, argv);
  if (!config.experiments) config.experiments = {};
  config.experiments.backCompat = false;
  return config;
};

module.exports.options = options;

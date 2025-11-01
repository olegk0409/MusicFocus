// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// config.transformer = {
//   ...config.transformer,
//   _expoRelativeProjectRoot: __dirname,
//   minifierPath: require.resolve('./obfuscatorMinifier.js'),
// };

module.exports = config;

const JavaScriptObfuscator = require('javascript-obfuscator');
const terserMinify = require('metro-minify-terser').minify;

module.exports = {
  minifierPath: __filename,
  minify: (file, options) => {
    const code = file.code;

    try {
      const obf = JavaScriptObfuscator.obfuscate(code, {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        stringArray: true,
        stringArrayEncoding: ['rc4'],
        rotateStringArray: true,
        stringArrayThreshold: 0.75,
        selfDefending: true,
      });

      return {
        code: obf.getObfuscatedCode(),
        map: null,
      };
    } catch (err) {
      console.warn('Obfuscator failed, falling back to terser:', err);
      return terserMinify(file, options);
    }
  },
};
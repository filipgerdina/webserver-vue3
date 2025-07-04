module.exports = () => {
  return {
    postcssPlugin: 'postcss-remove-google-fonts',
    AtRule: {
      import(atRule) {
        if (
          atRule.params.includes('fonts.googleapis.com')
        ) {
          atRule.remove();
        }
      },
    },
  };
};

module.exports.postcss = true;

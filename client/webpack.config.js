module.exports = {
  entry: {
    main: './src/main.jsx',
    about: './src/about.jsx',
  },
  output: {
    filename: './dist/[name].bundle.js',
  },
  watch: true,
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
    ],
  },
};

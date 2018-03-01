module.exports = {
  entry: {
    main: './src/main.jsx',
    post: './src/post.jsx',
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

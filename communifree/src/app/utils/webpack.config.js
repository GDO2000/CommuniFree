const Dotenv = require('dotenv-webpack');

module.exports = {
  // Other webpack configuration options...

  module: {
    rules: [
      // Other rules...
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: [
    new Dotenv(), // Load environment variables from .env file
  ],
};

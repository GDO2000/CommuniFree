const Dotenv = require('dotenv-webpack');

module.exports = {
  // Other webpack configuration options...

  module: {
    rules: [
      // Other rules...

      // Rule for handling TypeScript files
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Specify file extensions for module resolution
  },

  plugins: [
    new Dotenv(), // Load environment variables from .env file using Dotenv plugin
  ],
};

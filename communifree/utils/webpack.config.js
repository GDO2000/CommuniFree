//Overall, this configuration sets up webpack to handle TypeScript files,
//resolve module imports with specific file extensions, 
//and use the dotenv-webpack plugin to load environment variables from a .env file. 
//It helps streamline the build process and allows you to define environment-specific configuration values for your project.

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

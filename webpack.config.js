const path = require('path');

module.exports = {
   entry: './src/scroll-top.ts',
   devtool: 'inline-source-map',
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
      ],
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
   },
   output: {
      filename: 'scroll-top.js',
      path: path.resolve(__dirname, 'dist'),
   },
};
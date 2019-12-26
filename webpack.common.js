/*!
 * Cb Scroll Top v1.0.1 (https://github.com/yonicb/cbscroll-top)
 * Copyright 2019 The Cb Scroll Top Authors
 * Copyright 2019 Yoni Calsin <@yonicb>.
 * Licensed under MIT (https://github.com/yonicb/cbscroll-top/blob/master/LICENSE)
 */

const path = require('path');

module.exports = {
   entry: './src/cbscroll-top.ts',
   // devtool: 'inline-source-map',
   // watch: true,
   module: {
      rules: [
         // Typescript Configuration
         {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         // Sass Configuration
         {
            test: /\.s[ac]ss$/i,
            use: [
               // Creates `style` nodes from JS strings
               'style-loader',
               // Translates CSS into CommonJS
               'css-loader',
               // Compiles Sass to CSS
               'sass-loader',
            ],
         },

      ],
   },
   resolve: {
      extensions: ['.ts', '.js'],
   },
   output: {
      filename: 'cbscroll-top.js',
      path: path.resolve(__dirname, 'dist'),
   },
};
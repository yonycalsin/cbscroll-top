/*!
 * Cb Scroll Top v1.0.1 (https://github.com/yonicb/cbscroll-top)
 * Copyright 2019 The Cb Scroll Top Authors
 * Copyright 2019 Yoni Calsin <@yonicb>.
 * Licensed under MIT (https://github.com/yonicb/cbscroll-top/blob/master/LICENSE)
 */

const path = require('path');
const webpack = require('webpack');


module.exports = {
   entry: './src/index.ts',
   module: {
      rules: [
         // Typescript Configuration
         {
            test: /\.ts?$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'ts-loader',
                  options: {
                     transpileOnly: false,
                     onlyCompileBundledFiles: true,
                     allowTsInNodeModules: true
                  }
               }
            ]
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
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
   },
   plugins: [
      new webpack.ProgressPlugin(),
   ]
};

const path = require('path');

module.exports = {
   entry: './src/cbscroll-top.ts',
   // devtool: 'inline-source-map',
   watch: true,
   module: {
      rules: [
         // Typescript Configuration
         {
            test: /\.tsx?$/,
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

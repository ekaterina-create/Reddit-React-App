const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const nodeExternals = require('webpack-node-externals');
const { DefinePlugin } =require('webpack');

module.exports = {
   target: 'node',
   mode: NODE_ENV ? NODE_ENV : 'development',
   entry: path.resolve(__dirname, '../src/server/server.js'),
   output: {
      path: path.resolve(__dirname, '../dist/server'),
      filename: 'server.js'
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', 'json']
   },
   externals: [nodeExternals()],
   module: {
      rules: [{
         test: /\.[jt]sx?$/,
         use: ['ts-loader']

      },
      {
         test: /\.svg$/,
         use: ['@svgr/webpack'],
     },
     {
         test: /\.svg$/,
         use: [
           {
             loader: 'svg-url-loader',
             options: {
               limit: 10000,
             },
           },
         ],
       },  
      {
         test: /\.less$/,
         use: [
          {
            loader: "css-loader",
            options: {
            modules: {
            mode: 'local',
            localIdentName: "[name]__[local]--[hash:base64:5]",
            exportOnlyLocals: true,
              },
            }
         },
         "less-loader",
          
      ],
      exclude: GLOBAL_CSS_REGEXP
   },
   {
      test: GLOBAL_CSS_REGEXP,
      use: ['css-loader']
  }
  ]
},
plugins: [new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` })]
};

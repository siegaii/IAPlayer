const { resolve } = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', 
    output: { 
        filename: './built.js', 
        path: resolve(__dirname, 'build/js') 
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader'
                ]
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader'
              ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    esModule: false,
                    name: '[hash:10].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ],
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development' 
    // mode: 'production'
};
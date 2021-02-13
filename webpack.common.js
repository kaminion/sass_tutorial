const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const postcssLoader =
{
    loader : 'postcss-loader',
    options:{
        postcssOptions:{
            config: path.resolve(__dirname, 'postcss.config.js')
        }
    }
}

module.exports = 
{
    entry:'./index.jsx',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module:{
        rules:[
            {
                test:/\.s?css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    },
                    postcssLoader,
                    "sass-loader"
                ]
            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:[
                    {loader:'babel-loader'}
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ],
    target:"web"
}
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = 
{
    mode:'development',
    devServer:{
        open:true,
        overlay:true,
        port:3000
    }
}

module.exports = merge(commonConfig, devConfig);
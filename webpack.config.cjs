const path = require('path');

module.exports = {
    //...
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            },
        ],
    },
    mode: 'production',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'docs'),
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: false,
        port: 9000,
    },
};

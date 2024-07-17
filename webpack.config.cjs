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
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'docs'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 9000,
    },
};

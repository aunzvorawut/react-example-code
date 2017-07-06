var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dir + '/app/index.html',
    filename: 'index.html',
    injectt: 'body'
})
module.exports = config;
const config = {
    entry: __dirname + '/app/index.js',
    module: {
        loader: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    },
    output: {
        filename: "transformed.js",
        path: __dirname + "/build"
    },
    plugins: [HTMLWebpackPluginConfig]
};

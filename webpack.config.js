let HtmlWebpackPlugin =  require('html-webpack-plugin');
let path = require('path');
module.exports = {
    entry: './src/modules/index',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {test: /\.vue$/, loader:'vue-loader'},
            {test: /\.tpl$/, loader:'string-loader'},
            {test: /\.css$/, loader:'style-loader!css-loader'},
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: './index.html',
        })
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
        watchOptions: {
            ignored: ['**/.*',
                      /node_modules/],
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            // This rule causes webpack to copy json files into ./dist and
            // import their paths into the dependent js files. Without this rule
            // json data is inlined into the bundle.
            // {
	          //     test: /\.json$/,
            //     exclude: /node_modules/,
	          //     loader: 'file-loader',
	          //     type: 'javascript/auto',
            //     options: {
            //         name() {
            //             return '[name].[ext]';
            //         },
            //     }
            // },
        ],
    },
};

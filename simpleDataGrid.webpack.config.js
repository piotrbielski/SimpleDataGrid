const path = require('path');

module.exports = {
    entry: "./src/Grid.js",
    output: {
        path: "./dist/", //path.resolve(__dirname, 'dist'),
        filename: "simpleDataGrid.bundle.js",
        library: "SimpleDataGrid"
    },
    watch: true,
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']//,
                        // plugins: [
                        //     [
                        //         "@babel/plugin-transform-runtime",
                        //         {
                        //             absoluteRuntime: false,
                        //             corejs: false,
                        //             helpers: true,
                        //             regenerator: true,
                        //             useESModules: false
                        //         }
                        //     ]
                        // ]
                    }
                }
            }
        ]
    }
}
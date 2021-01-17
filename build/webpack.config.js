const path = require('path');

module.exports = () => {
    return {
        devtool: '#source-map',
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, '../lib'),
            filename: 'index.js',
            libraryTarget: 'commonjs'
        },
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"],
            modules: [
                'node_modules'
            ],
            // alias: {
            //     '@design-master/math': path.resolve(process.cwd(), 'node_modules', '@design-master/math'),
            // },
        },
        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
                {
                    test: /\.worker\.js$/,
                    use: { 
                        loader: 'worker-loader',
                        options: { 
                            name: '[hash].worker.js',
                            inline: true,
                            fallback: false,
                            publicPath: path.resolve(__dirname, './dist')
                        }
                    }
                },
    
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: true,
                            },
                        },
                    ]
                },
                {
                    test: /\.styl$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'stylus-loader',
                        }
                    ]
                },
                {
                    test: /.(png|jpg|gif|jpeg)$/,
                    use: 'url-loader'
                }, {
                    test:/\.(png|jpg|jpeg|gif)$/,
                    use:[
                    {loader:'file-loader', options:{}}
                    ]
                }
            ]
        },
    };
};
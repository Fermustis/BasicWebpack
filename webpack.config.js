const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const Assets = require('./assets.js');
module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',

    },
    plugins: [
        new CopyPlugin({
                patterns: Assets.map(asset => { 
                    return {
                        from: path.resolve(__dirname, `./node_modules/${asset}`),//copiar los archivos de node_modules a dist
                        to: path.resolve(__dirname, `libs`),
                    };
                })
            
        }),
    ],

};
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const fs = require('fs')
const webpack = require("webpack")
const purgecss = require("@fullhuman/postcss-purgecss");
//const autoprefixer = require("autoprefixer")
//const CopyPlugin = require('copy-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default
const zlib = require("zlib");
const zopfli = require("@gfx/zopfli");


let plugins = [];

let typeToCompress = /\.(js|css|html|svg|json|png|jpe?g|woff(2?)|ttf|eot|map)$/;

plugins.push(  new CompressionPlugin({
    filename: "[path][base].br",
    algorithm: "brotliCompress",
    test: typeToCompress,
    compressionOptions: {
        params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
    },
    threshold: 0,
    minRatio: 0.8,
}))

plugins.push(new CompressionPlugin({
    filename: "[path][base].gz",
    test: typeToCompress,
    compressionOptions: {
        numiterations: 15,
    },
    algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback);
    },
    threshold: 0,
    minRatio: 0.8,
}))
    
plugins.push( new ImageminPlugin());
//pluigins.push(_copyPlugin);


plugins.push(
    new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, 'dist'),
      // Required - Routes to render.
      routes: [ '/' ],
    })
)

module.exports = {

    lintOnSave: false,
     configureWebpack: { 
        plugins
     }

}
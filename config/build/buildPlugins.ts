import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import type { BuildOptions } from './types/config'



export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => {
   const plugins = [
      new HtmlWebpackPlugin({
         template: paths.html,
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
         filename: 'css/[name].[contenthash:8].css',
         chunkFilename: 'css/[name].[contenthash:8].css',
      }),
      new webpack.DefinePlugin({
         __IS_DEV__: JSON.stringify(isDev)
      }),
   ]

   if (isDev) {
      plugins.push(
         new webpack.HotModuleReplacementPlugin(),
         new BundleAnalyzerPlugin({
            openAnalyzer: false
         })
      )
   }


   return plugins
}
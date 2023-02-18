import webpack from 'webpack'

import { buildCssLoader } from './loaders/buildCssLoader'

import type { BuildOptions } from './types/config'



export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {

   const babelLoader = {
      test: /\.(js|jsx|tsx)$/,
      exclude: /node_modules/,
      use: {
         loader: 'babel-loader',
         options: {
            presets: ['@babel/preset-env']
         }
      }
   }

   const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
   }

   const fileLoader = {
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [
         {
            loader: 'file-loader',
         },
      ],
   }

   const cssLoader = buildCssLoader(isDev)

   const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   }


   return [
      svgLoader,
      fileLoader,
      babelLoader,
      typescriptLoader,
      cssLoader
   ]
}
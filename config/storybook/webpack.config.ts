import path from 'path'
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'

import { buildCssLoader } from '../build/loaders/buildCssLoader'

import type { BuildPaths } from '../build/types/config'



export default ({ config }: { config: webpack.Configuration }) => {
   const paths: BuildPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src')
   }
   config.resolve?.modules?.push(path.relative(__dirname, '../../src'), 'node_modules')
   config.resolve?.extensions?.push('.ts', 'tsx')

   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   // @ts-ignore
   config.module?.rules = config.module?.rules?.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
         return {
            ...rule,
            exclude: /\.svg$/i
         }
      }
      return rule
   })

   config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
   })
   config.module?.rules?.push(buildCssLoader(true))

   config.plugins?.push(new DefinePlugin({
      __IS_DEV__: true
   }))

   return config
}
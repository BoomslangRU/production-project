declare module '*.scss' {
   const content: Record<string, string>
   export default content
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
   import React from 'react'
   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
   export default SVG
}

declare const __IS_DEV__: boolean
declare const __API__: string
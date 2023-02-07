type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods?: Mods, additional?: string[]): string => {
   return [
      cls,
      // eslint-disable-next-line no-unsafe-optional-chaining
      ...additional?.filter(Boolean),
      Object.entries(mods)
         .filter(([_, value]) => Boolean(value))
         .map(([className]) => className)
   ].join(' ')
}
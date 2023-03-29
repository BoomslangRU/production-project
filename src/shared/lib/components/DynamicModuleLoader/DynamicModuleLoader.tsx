import { FC, useEffect } from 'react'
import { useStore } from 'react-redux'
import { Reducer } from '@reduxjs/toolkit'

import { useAppDispatch } from 'shared/lib/hooks/AppDispatch/useAppDispatch'

import type { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import type { ReduxStoreManager } from 'app/providers/StoreProvider'



export type ReducersList = {
   [name in StateSchemaKey]?: Reducer
}
interface DynamicModuleLoaderProps {
   reducers: ReducersList
   removeAfterUnmount?: boolean
}



export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = props => {
   const { children, reducers, removeAfterUnmount } = props
   const dispatch = useAppDispatch()
   const store = useStore() as ReduxStoreManager

   useEffect(() => {
      Object.entries(reducers)?.forEach(([name, reducer]) => {
         store.reducerManager.add(name as StateSchemaKey, reducer)
         dispatch({ type: `@INIT ${name} reducer` })
      })

      return () => {
         if (removeAfterUnmount) {
            Object.keys(reducers)?.forEach(name => {
               store.reducerManager.remove(name as StateSchemaKey)
               dispatch({ type: `@DESTROY ${name} reducer` })
            })
         }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])


   return (
      <>
         {children}
      </>
   )
}
import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { Reducer } from '@reduxjs/toolkit'

import { ReduxStoreManager } from 'app/providers/StoreProvider'

import type { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'



export type ReducersList = {
   [name in StateSchemaKey]?: Reducer
}
interface DynamicModuleLoaderProps {
   reducers: ReducersList
   removeAfterUnmount?: boolean
}
type ReducersListEntry = [StateSchemaKey, Reducer]



export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = props => {
   const { children, reducers, removeAfterUnmount } = props
   const dispatch = useDispatch()
   const store = useStore() as ReduxStoreManager

   useEffect(() => {
      Object.entries(reducers)?.forEach(([name, reducer]: ReducersListEntry) => {
         store.reducerManager.add(name, reducer)
         dispatch({ type: `@INIT ${name} reducer` })
      })

      return () => {
         if (removeAfterUnmount) {
            Object.keys(reducers)?.forEach((name: StateSchemaKey) => {
               store.reducerManager.remove(name)
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
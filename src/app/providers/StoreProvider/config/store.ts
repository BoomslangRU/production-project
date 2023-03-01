import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'

import type { StateSchema } from './StateSchema'



export function createReduxStore(
   initialState?: StateSchema,
   asyncReducers?: ReducersMapObject<StateSchema>
) {

   const rootReducers: ReducersMapObject<StateSchema> = {
      ...asyncReducers,
      counter: counterReducer,
      user: userReducer,
   }

   const reducerManager = createReducerManager(rootReducers)

   const store = configureStore<StateSchema>({
      reducer: reducerManager.reduce,
      devTools: __IS_DEV__,
      preloadedState: initialState
   })

   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   // @ts-ignore
   store.reducerManager = reducerManager


   return store
}


export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

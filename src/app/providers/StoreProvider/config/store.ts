import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'

import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { API } from 'shared/api/api'

import type { NavigateOptions, To } from 'react-router-dom'
import type { StateSchema, ThunkExtraArg } from './StateSchema'



export function createReduxStore(
   initialState?: StateSchema,
   asyncReducers?: ReducersMapObject<StateSchema>,
   navigate?: (to: To, options?: NavigateOptions) => void
) {

   const rootReducers: ReducersMapObject<StateSchema> = {
      ...asyncReducers,
      counter: counterReducer,
      user: userReducer,
   }

   const reducerManager = createReducerManager(rootReducers)

   const extraArg: ThunkExtraArg = {
      api: API,
      navigate
   }

   const store = configureStore<StateSchema>({
      reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
      devTools: __IS_DEV__,
      preloadedState: initialState,

      middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
         thunk: {
            extraArgument: extraArg
         }
      })
   })

   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   // @ts-ignore
   store.reducerManager = reducerManager


   return store
}


export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

import {
   EnhancedStore,
   ReducersMapObject,
   AnyAction,
   Reducer,
   CombinedState
} from '@reduxjs/toolkit'

import type { CounterSchema } from 'entities/Counter'
import type { UserSchema } from 'entities/User'
import type { ProfileSchema } from 'entities/Profile/modal/types/profile'
import type { LoginSchema } from 'features/AuthByUsername'



export interface StateSchema {
   counter: CounterSchema
   user: UserSchema

   // async reducers
   loginForm?: LoginSchema
   profile?: ProfileSchema
}


export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
   getReducerMap: () => ReducersMapObject<StateSchema>
   reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
   add: (key: StateSchemaKey, reducer: Reducer) => void
   remove: (key: StateSchemaKey) => void
}


export interface ReduxStoreManager extends EnhancedStore<StateSchema> {
   reducerManager: ReducerManager
}
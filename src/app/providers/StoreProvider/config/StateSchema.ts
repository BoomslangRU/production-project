import {
   AnyAction, EnhancedStore, Reducer, ReducersMapObject
} from '@reduxjs/toolkit'
import { CombinedState, Dispatch } from 'redux'
import { API } from 'shared/api/api'

import type { NavigateOptions, To } from 'react-router-dom'
import type { CounterSchema } from 'entities/Counter'
import type { ProfileSchema } from 'entities/Profile/modal/types/profile'
import type { UserSchema } from 'entities/User'
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


export interface ThunkExtraArg {
   api: typeof API
   navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
   rejectValue: T
   extra: ThunkExtraArg
   dispatch: any
}
import { StoreProvider } from './components/StoreProvider'
import { createReduxStore, AppDispatch } from './config/store'

import type { StateSchema, ReduxStoreManager } from './config/StateSchema'


export {
   StoreProvider,
   createReduxStore,
   StateSchema,
   ReduxStoreManager,
   AppDispatch
}
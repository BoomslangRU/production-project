import { Counter } from './components/Counter'
import { counterReducer } from './model/slice/counterSlice'

import type { CounterSchema } from './model/types/CounterSchema'


export {
   counterReducer,
   Counter,
   CounterSchema
}
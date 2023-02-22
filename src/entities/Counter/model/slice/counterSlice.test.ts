import { counterReducer, counterActions } from './counterSlice'

import type { CounterSchema } from '../types/CounterSchema'


const value = Math.floor(Math.random() * 100)

describe('counterSlice.test', () => {
   test('decrement value', () => {
      const state: CounterSchema = { value }

      expect(
         counterReducer(state, counterActions.decrement()
         )).toEqual({ value: value - 1 })
   })

   test('increment value', () => {
      const state: CounterSchema = { value }

      expect(
         counterReducer(state, counterActions.increment()
         )).toEqual({ value: value + 1 })
   })

   test('should work with empty state', () => {
      expect(
         counterReducer(undefined, counterActions.increment()
         )).toEqual({ value: 1 })
   })
})
import { getCounter } from './getCounter'
import { DeepPartial } from '@reduxjs/toolkit'

import type { StateSchema } from 'app/providers/StoreProvider'


const value = Math.floor(Math.random() * 100)

describe('getCounter', () => {
   test('should return counter value', () => {
      const state: DeepPartial<StateSchema> = {
         counter: { value }
      }
      expect(getCounter(state as StateSchema)).toEqual({ value })
   })
})
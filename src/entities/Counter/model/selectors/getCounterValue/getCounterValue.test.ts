import { getCounterValue } from './getCounterValue'
import { DeepPartial } from '@reduxjs/toolkit'

import type { StateSchema } from 'app/providers/StoreProvider'


const value = Math.floor(Math.random() * 100)

describe('getCounterValue', () => {
   test('should return counter value', () => {
      const state: DeepPartial<StateSchema> = {
         counter: { value }
      }
      expect(getCounterValue(state as StateSchema)).toEqual(value)
   })
})
import { DeepPartial } from '@reduxjs/toolkit'

import { loginActions, loginReducer } from './loginSlice'

import type { LoginSchema } from '../types/loginSchema'



describe('loginSlice', () => {
   test('test set username', () => {
      const state: DeepPartial<LoginSchema> = { username: 'Name' }
      expect(loginReducer(
         state as LoginSchema,
         loginActions.setUsername('Ivan')
      )).toEqual({ username: 'Ivan' })
   })
   test('test set password', () => {
      const state: DeepPartial<LoginSchema> = { password: '1234' }
      expect(loginReducer(
         state as LoginSchema,
         loginActions.setPassword('1111')
      )).toEqual({ password: '1111' })
   })
})

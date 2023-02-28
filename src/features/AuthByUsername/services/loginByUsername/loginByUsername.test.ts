/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'

import { StateSchema } from 'app/providers/StoreProvider'
import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'



jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)



describe('loginByUsername', () => {
   test('success login', async () => {
      const data = { username: 'Name', id: 1 }
      mockedAxios.post.mockReturnValue(Promise.resolve({ data }))

      const thunk = new TestAsyncThunk(loginByUsername)
      const result = await thunk.callThunk({ username: 'Name', password: '1234' })

      expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(data))
      expect(thunk.dispatch).toHaveBeenCalledTimes(3)
      expect(mockedAxios.post).toHaveBeenCalled()
      expect(result.meta.requestStatus).toBe('fulfilled')
      expect(result.payload).toEqual(data)
   })

   test('error login', async () => {
      mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

      const thunk = new TestAsyncThunk(loginByUsername)
      const result = await thunk.callThunk({ username: 'Name', password: '1234' })

      expect(thunk.dispatch).toHaveBeenCalledTimes(2)
      expect(mockedAxios.post).toHaveBeenCalled()
      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toBe('error')
   })
})

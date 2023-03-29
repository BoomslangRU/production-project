import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { loginByUsername } from './loginByUsername'




describe('loginByUsername', () => {
   test('success login', async () => {
      const data = { username: 'Name', id: 1 }
      const thunk = new TestAsyncThunk(loginByUsername)
      thunk.api.postLogin.mockReturnValue({ data } as any)

      const result = await thunk.callThunk({ username: 'Name', password: '1234' })

      expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(data))
      expect(thunk.dispatch).toHaveBeenCalledTimes(3)
      expect(thunk.api.postLogin).toHaveBeenCalled()
      expect(result.meta.requestStatus).toBe('fulfilled')
      expect(result.payload).toEqual(data)
   })

   test('error login', async () => {
      const thunk = new TestAsyncThunk(loginByUsername)
      thunk.api.postLogin.mockReturnValue({ status: 403 } as any)

      const result = await thunk.callThunk({ username: 'Name', password: '1234' })

      expect(thunk.dispatch).toHaveBeenCalledTimes(2)
      expect(thunk.api.postLogin).toHaveBeenCalled()
      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toBe('error')
   })
})

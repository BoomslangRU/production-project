import { createAsyncThunk } from '@reduxjs/toolkit'

import { User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

import type { ThunkConfig } from 'app/providers/StoreProvider'



export interface LoginByUsernameData {
   username: string
   password: string
}



export const loginByUsername = createAsyncThunk<User, LoginByUsernameData, ThunkConfig<string>>(
   'login/loginByUsername', async (authData, thunkApi) => {

      const { dispatch, extra, rejectWithValue } = thunkApi

      try {
         const { data } = await extra.api.postLogin(authData)

         if (!data) {
            throw new Error()
         }

         localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data))
         dispatch(userActions.setAuthData(data))
         return data
      } catch (e) {
         console.error(e)
         return rejectWithValue('error')
      }
   }
)

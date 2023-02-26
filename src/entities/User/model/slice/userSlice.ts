import { createSlice } from '@reduxjs/toolkit'

import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { User, UserSchema } from '../types/user'



const initialState: UserSchema = {
   // authData?: 
}



export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setAuthData: (state, { payload }: PayloadAction<User>) => {
         state.authData = payload
      },
      initAuthData: state => {
         const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
         if (user) {
            state.authData = JSON.parse(user)
         }
      },
      logout: state => {
         state.authData = undefined
         localStorage.removeItem(USER_LOCALSTORAGE_KEY)
      }
   }
})


export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
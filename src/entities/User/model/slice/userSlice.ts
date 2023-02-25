import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { UserSchema } from '../types/user'



const initialState: UserSchema = {
   // authData?: 
}



export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {}
})


export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
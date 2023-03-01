import { createSlice } from '@reduxjs/toolkit'

import type { ProfileSchema } from '../types/profile'




const initialState: ProfileSchema = {
   data: null,
   error: '',
   isLoading: false,
   isReadonly: true
}



export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {}
})


export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
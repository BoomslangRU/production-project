import { createSlice } from '@reduxjs/toolkit'

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

import type { ProfileSchema } from '../types/profile'




const initialState: ProfileSchema = {
   data: undefined,
   error: '',
   isLoading: false,
   isReadonly: true
}



export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(fetchProfileData.pending, state => {
            state.error = undefined
            state.isLoading = true
         })
         .addCase(
            fetchProfileData.fulfilled,
            (state, { payload }
            ) => {
               state.isLoading = false
               state.data = payload
            })
         .addCase(fetchProfileData.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload
         })
   }
})


export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
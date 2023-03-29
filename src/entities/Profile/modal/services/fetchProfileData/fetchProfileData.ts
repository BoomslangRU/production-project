import { createAsyncThunk } from '@reduxjs/toolkit'

import type { ThunkConfig } from 'app/providers/StoreProvider'
import type { Profile } from '../../types/profile'



export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
   'profile/fetchProfileData', async (_, thunkApi) => {

      const { extra, rejectWithValue } = thunkApi

      try {
         const { data } = await extra.api.getProfile()

         return data
      } catch (e) {
         console.error(e)
         return rejectWithValue('error')
      }
   }
)

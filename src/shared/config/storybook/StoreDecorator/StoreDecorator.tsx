import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

import type { DeepPartial } from '@reduxjs/toolkit'
import type { Story } from '@storybook/react'
import type { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'



const defaultAsyncReducers: ReducersList = {
   loginForm: loginReducer,
   profile: profileReducer
}


export const StoreDecorator = (
   state: DeepPartial<StateSchema>,
   asyncReducers?: ReducersList
) => (StoryComponent: Story) => (

   <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
   >
      <StoryComponent />
   </StoreProvider>
)

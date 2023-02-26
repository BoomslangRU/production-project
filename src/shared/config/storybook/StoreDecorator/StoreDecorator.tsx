import { DeepPartial } from '@reduxjs/toolkit'
import type { Story } from '@storybook/react'

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'



export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
   <StoreProvider initialState={state}>
      <StoryComponent />
   </StoreProvider>
)

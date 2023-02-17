import { BrowserRouter } from 'react-router-dom'

import type { Story } from '@storybook/react'



export const RouterDecorator = (StoryComponent: Story) => (
   <BrowserRouter>
      <StoryComponent />
   </BrowserRouter>
)
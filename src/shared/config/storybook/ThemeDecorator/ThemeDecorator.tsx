import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

import type { Story } from '@storybook/react'



export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
   <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
         <StoryComponent />
      </div>
   </ThemeProvider>
)

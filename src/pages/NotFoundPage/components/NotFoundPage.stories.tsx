import { ComponentStory, ComponentMeta } from '@storybook/react'

import { NotFoundPage } from './NotFoundPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'



export default {
   title: 'pages/NotFoundPage',
   component: NotFoundPage,
   argTypes: {
      backgroundColor: { control: 'color' },
   }
} as ComponentMeta<typeof NotFoundPage>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof NotFoundPage> = args => <NotFoundPage {...args} />



export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
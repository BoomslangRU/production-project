import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'



export default {
   title: 'widget/ThemeSwitcher',
   component: ThemeSwitcher,
   argTypes: {
      backgroundColor: { control: 'color' },
   }
} as ComponentMeta<typeof ThemeSwitcher>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ThemeSwitcher> = args => <ThemeSwitcher {...args} />



export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
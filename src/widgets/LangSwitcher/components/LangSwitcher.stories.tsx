import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LangSwitcher } from './LangSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'



export default {
   title: 'widget/LangSwitcher',
   component: LangSwitcher,
   argTypes: {
      backgroundColor: { control: 'color' },
   }
} as ComponentMeta<typeof LangSwitcher>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof LangSwitcher> = args => <LangSwitcher {...args} />



export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
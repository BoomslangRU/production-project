import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from './Input'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'



export default {
   title: 'shared/Input',
   component: Input,
   argTypes: {
      backgroundColor: { control: 'color' },
   }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />



export const Light = Template.bind({})
Light.args = {
   placeholder: 'Type text',
   value: '1231234',
}

export const Dark = Template.bind({})
Dark.args = {
   placeholder: 'Type text',
   value: '1231234'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

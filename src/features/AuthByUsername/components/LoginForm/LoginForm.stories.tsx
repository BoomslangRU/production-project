import { ComponentStory, ComponentMeta } from '@storybook/react'

import LoginForm from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'



export default {
   title: 'features/LoginForm',
   component: LoginForm,
   argTypes: {
      backgroundColor: { control: 'color' },
   }
} as ComponentMeta<typeof LoginForm>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof LoginForm> = args => <LoginForm {...args} />



export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({
   loginForm: {
      username: 'admin',
      password: '123',
      isLoading: false
   }
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
   loginForm: {
      username: 'admin',
      password: '123',
      isLoading: false
   }
})]

export const WithError = Template.bind({})
WithError.args = {}
WithError.decorators = [StoreDecorator({
   loginForm: {
      username: 'admin',
      password: '123',
      isLoading: false,
      error: 'ERROR'
   }
})]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({
   loginForm: {
      username: '',
      password: '',
      isLoading: true
   }
})]

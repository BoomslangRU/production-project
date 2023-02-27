import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'



export default {
   title: 'shared/Text',
   component: Text,
   argTypes: {
      backgroundColor: { control: 'color' },
   }
} as ComponentMeta<typeof Text>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Text> = args => <Text {...args} />



export const Primary = Template.bind({})
Primary.args = {
   title: 'Title lorem ipsun',
   text: 'Description Description Description'
}

export const Error = Template.bind({})
Error.args = {
   title: 'Title lorem ipsun',
   text: 'Description Description Description',
   theme: TextTheme.ERROR
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
   title: 'Title lorem ipsun'
}

export const OnlyText = Template.bind({})
OnlyText.args = {
   text: 'Description Description Description'
}


export const Dark = Template.bind({})
Dark.args = {
   title: 'Title lorem ipsun',
   text: 'Description Description Description'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const ErrorDark = Template.bind({})
ErrorDark.args = {
   title: 'Title lorem ipsun',
   text: 'Description Description Description',
   theme: TextTheme.ERROR
}
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
   title: 'Title lorem ipsun'
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
   text: 'Description Description Description'
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

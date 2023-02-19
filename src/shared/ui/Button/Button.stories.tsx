import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, SizeButton, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'



export default {
   title: 'shared/Button',
   component: Button,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />


// Primary
export const Primary = Template.bind({})
Primary.args = {
   children: 'Text'
}
export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
   children: 'Text'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]


// Clear
export const Clear = Template.bind({})
Clear.args = {
   children: 'Text',
   theme: ThemeButton.CLEAR
}
export const ClearDark = Template.bind({})
ClearDark.args = {
   children: 'Text',
   theme: ThemeButton.CLEAR
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]


// Outline
export const Outline = Template.bind({})
Outline.args = {
   children: 'Text',
   theme: ThemeButton.OUTLINE
}
export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
   children: 'Text',
   theme: ThemeButton.OUTLINE,
   size: SizeButton.L
}
export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
   children: 'Text',
   theme: ThemeButton.OUTLINE,
   size: SizeButton.XL
}
export const OutlineDark = Template.bind({})
OutlineDark.args = {
   children: 'Text',
   theme: ThemeButton.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]


// Background
export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
   children: 'Text',
   theme: ThemeButton.BACKGROUND
}
export const BackgroundThemeDark = Template.bind({})
BackgroundThemeDark.args = {
   children: 'Text',
   theme: ThemeButton.BACKGROUND
}
BackgroundThemeDark.decorators = [ThemeDecorator(Theme.DARK)]


// BackgroundInverted
export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
   children: 'Text',
   theme: ThemeButton.BACKGROUND_INVERTED
}
export const BackgroundInvertedDark = Template.bind({})
BackgroundInvertedDark.args = {
   children: 'Text',
   theme: ThemeButton.BACKGROUND_INVERTED
}
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]


// Square
export const Square = Template.bind({})
Square.args = {
   children: '>',
   square: ThemeButton.SQUARE,
   theme: ThemeButton.BACKGROUND
}
export const SquareDark = Template.bind({})
SquareDark.args = {
   children: '>',
   square: ThemeButton.SQUARE,
   theme: ThemeButton.BACKGROUND
}
SquareDark.decorators = [ThemeDecorator(Theme.DARK)]


// Square sizing
export const SquareSizeM = Template.bind({})
SquareSizeM.args = {
   children: '>',
   square: ThemeButton.SQUARE,
   theme: ThemeButton.BACKGROUND_INVERTED,
   size: SizeButton.M
}
export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
   children: '>',
   square: ThemeButton.SQUARE,
   theme: ThemeButton.BACKGROUND_INVERTED,
   size: SizeButton.L
}
export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
   children: '>',
   square: ThemeButton.SQUARE,
   theme: ThemeButton.BACKGROUND_INVERTED,
   size: SizeButton.XL
}


import { ButtonHTMLAttributes, FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Button.module.scss'



export enum ThemeButton {
   CLEAR = 'clear',
   CLEAR_INVERTED = 'clearInverted',
   OUTLINE = 'outline',
   BACKGROUND = 'background',
   BACKGROUND_INVERTED = 'backgroundInverted',
   SQUARE = 'square'
}

export enum SizeButton {
   M = 'size_m',
   L = 'size_l',
   XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string
   theme?: ThemeButton
   square?: ThemeButton,
   size?: SizeButton,
   disabled?: boolean
}



export const Button: FC<ButtonProps> = props => {
   const {
      className,
      children,
      theme,
      square,
      disabled,
      size = SizeButton.M,
      ...otherProps
   } = props


   const additional = [
      className,
      styles[theme],
      styles[square],
      styles[size]
   ]



   return (
      <button
         {...otherProps}
         className={classNames(styles.Button, { [styles.disabled]: disabled }, additional)}
         disabled={disabled}
      >
         {children}
      </button>
   )
}
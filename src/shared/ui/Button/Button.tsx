import { ButtonHTMLAttributes, FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import style from './Button.module.scss'



export enum ThemeButton {
   CLEAR = 'clear',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string
   theme?: ThemeButton
}



export const Button: FC<ButtonProps> = props => {
   const {
      className,
      children,
      theme,
      ...otherProps
   } = props


   return (
      <button
         {...otherProps}
         className={classNames(style.Button, {}, [className, style[theme]])}
      >
         {children}
      </button>
   )
}
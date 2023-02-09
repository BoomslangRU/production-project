import { FC } from 'react'

import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'



interface ThemeSwitcherProps {
   className?: string
}



export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
   const { theme, toggleTheme } = useTheme()

   return (
      <Button
         theme={ThemeButton.CLEAR}
         className={classNames('', {}, [className])}
         onClick={toggleTheme}
      >
         {theme === Theme.DARK
            ? <DarkIcon />
            : <LightIcon />
         }
      </Button>
   )
}
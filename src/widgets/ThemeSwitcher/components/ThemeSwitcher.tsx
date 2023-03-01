import { memo } from 'react'

import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'



interface ThemeSwitcherProps {
   className?: string
}



export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
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
})
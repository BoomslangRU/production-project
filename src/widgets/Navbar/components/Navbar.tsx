import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

import style from './Navbar.module.scss'



interface NavbarProps {
   className?: string
}



export const Navbar = ({ className }: NavbarProps) => {

   return (
      <div className={classNames(style.Navbar, {}, [className])}>
         <ThemeSwitcher />
         <div className={style.links}>
            <AppLink to={'/'} className={style.mainLink} theme={AppLinkTheme.SECONDARY}>
               Главная
            </AppLink>
            <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
               О сайте
            </AppLink>
         </div>
      </div>
   )
}
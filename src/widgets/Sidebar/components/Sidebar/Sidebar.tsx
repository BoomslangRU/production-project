import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RoutesPath } from 'shared/config/routesConfig/routesConfig'

import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

import VectorIcon from 'shared/assets/icons/vector.svg'
import ClarityIcon from 'shared/assets/icons/clarity_list.svg'

import styles from './Sidebar.module.scss'



interface SidebarProps {
   className?: string
}



export const Sidebar: FC<SidebarProps> = ({ className }) => {
   const [isCollapsed, setIsCollapsed] = useState(false)
   const { t } = useTranslation()

   const onToggle = () => {
      setIsCollapsed(prev => !prev)
   }


   return (
      <div
         data-testid='sidebar'
         className={classNames(styles.Sidebar, { [styles.collapsed]: isCollapsed }, [className])}
      >
         <div className={styles.items}>
            <div className={styles.item}>
               <AppLink
                  to={RoutesPath.main}
                  theme={AppLinkTheme.SECONDARY}
               >
                  <VectorIcon className={styles.icon} />
                  <span className={styles.link}>
                     {t('Главная')}
                  </span>
               </AppLink>
            </div>

            <div className={styles.item}>
               <AppLink
                  to={RoutesPath.about}
                  theme={AppLinkTheme.SECONDARY}
               >
                  <ClarityIcon className={styles.icon} />
                  <span className={styles.link}>
                     {t('О сайте')}
                  </span>
               </AppLink>
            </div>

         </div>

         <Button
            data-testid='sidebar-toggle'
            className={styles.collapseBtn}
            theme={ThemeButton.BACKGROUND_INVERTED}
            square={ThemeButton.SQUARE}
            size={SizeButton.L}
            onClick={onToggle}
         >
            {isCollapsed ? '>' : '<'}
         </Button>
         <div
            className={styles.switchers}
         >
            <ThemeSwitcher />

            <LangSwitcher
               className={styles.lang}
               isShort={isCollapsed}
            />
         </div>
      </div>
   )
}
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import type { SidebarItemType } from 'widgets/Sidebar/model/items'

import styles from './SidebarItem.module.scss'



interface SidebarItemProps {
   item: SidebarItemType
   isCollapsed: boolean
}



export const SidebarItem = memo(({ item, isCollapsed }: SidebarItemProps) => {
   const { t } = useTranslation()


   return (
      <AppLink
         className={classNames(styles.item, { [styles.collapsed]: isCollapsed }, [])}
         to={item.path}
         theme={AppLinkTheme.SECONDARY}
      >
         <item.Icon className={styles.icon} />
         <span className={styles.link}>
            {t(item.text)}
         </span>
      </AppLink>
   )
})
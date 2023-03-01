import { memo, useMemo, useState } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

import styles from './Sidebar.module.scss'



interface SidebarProps {
   className?: string
}



export const Sidebar = memo(({ className }: SidebarProps) => {
   const [isCollapsed, setIsCollapsed] = useState(false)

   const itemsList = useMemo(() => (
      SidebarItemsList?.map(item => (
         <SidebarItem
            key={item.path}
            item={item}
            isCollapsed={isCollapsed}
         />
      ))
   ), [isCollapsed])

   const onToggle = () => {
      setIsCollapsed(prev => !prev)
   }


   return (
      <div
         data-testid='sidebar'
         className={classNames(styles.Sidebar, { [styles.collapsed]: isCollapsed }, [className])}
      >
         <div className={styles.items}>
            {itemsList}
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
})
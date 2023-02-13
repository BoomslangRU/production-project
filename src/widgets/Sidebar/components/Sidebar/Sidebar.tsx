import { FC, useState } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

import style from './Sidebar.module.scss'



interface SidebarProps {
   className?: string
}



export const Sidebar: FC<SidebarProps> = ({ className }) => {
   const [isCollapsed, setIsCollapsed] = useState(false)


   const onToggle = () => {
      setIsCollapsed(prev => !prev)
   }


   return (
      <div
         data-testid='sidebar'
         className={classNames(style.Sidebar, { [style.collapsed]: isCollapsed }, [className])}
      >
         {/* eslint-disable-next-line i18next/no-literal-string */}
         <Button
            data-testid='sidebar-toggle'
            onClick={onToggle}
         >
            toggle
         </Button>
         <div
            className={style.switchers}
         >
            <ThemeSwitcher />
            <LangSwitcher className={style.lang} />
         </div>
      </div>
   )
}
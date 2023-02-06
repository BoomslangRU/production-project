import { FC, useState } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
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
         className={classNames(style.Sidebar, { [style.collapsed]: isCollapsed }, [className])}
      >
         <button onClick={onToggle}>
            toggle
         </button>
         <div className={style.switchers}>
            <ThemeSwitcher />
         </div>
      </div>
   )
}
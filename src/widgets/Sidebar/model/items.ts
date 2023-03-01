import { RoutesPath } from 'shared/config/routesConfig/routesConfig'

import MainIcon from 'shared/assets/icons/vector.svg'
import AboutIcon from 'shared/assets/icons/clarity_list.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'



export interface SidebarItemType {
   path: string
   text: string
   Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
   {
      path: RoutesPath.main,
      text: 'Главная',
      Icon: MainIcon
   },
   {
      path: RoutesPath.about,
      text: 'О сайте',
      Icon: AboutIcon
   },
   {
      path: RoutesPath.profile,
      text: 'Профиль',
      Icon: ProfileIcon
   }
]
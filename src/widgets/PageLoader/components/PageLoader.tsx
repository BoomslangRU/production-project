import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'

import style from './PageLoader.module.scss'



interface PageLoaderProps {
   className?: string
}



export const PageLoader = ({ className }: PageLoaderProps) => {

   return (
      <div className={classNames(style.PageLoader, {}, [className])}>
         <Loader />
      </div>
   )
}
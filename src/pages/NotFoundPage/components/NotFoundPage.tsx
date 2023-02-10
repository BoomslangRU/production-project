import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'

import style from './NotFoundPage.module.scss'



interface NotFoundPageProps {
   nameClass?: string
}



export const NotFoundPage = ({ nameClass }: NotFoundPageProps) => {
   const { t } = useTranslation()

   return (
      <div className={classNames(style.NotFoundPage, {}, [nameClass])}>
         {t('Страница не найдена')}
      </div>
   )
}
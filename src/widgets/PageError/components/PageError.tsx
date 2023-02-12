import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'

import styles from './PageError.module.scss'



export const PageError = () => {
   const { t } = useTranslation()

   const reloadPage = () => {
      location.reload()
   }

   return (
      <div className={classNames(styles.PageError, {}, [])}>
         <p>{t('Произошла непредвиденная ошибка')}</p>
         <Button onClick={reloadPage}>
            {t('Обновить страницу')}
         </Button>
      </div>
   )
}
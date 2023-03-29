import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { getProfileData } from '../../modal/selectors/getProfileData/getProfileData'
import { getProfileError } from '../../modal/selectors/getProfileError/getProfileError'
import {
   getProfileIsLoading
} from '../../modal/selectors/getProfileIsLoading/getProfileIsLoading'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import styles from './ProfileCard.module.scss'



interface ProfileCardProps {
   className?: string
}



export const ProfileCard = ({ className }: ProfileCardProps) => {
   const { t } = useTranslation('profile')
   const data = useSelector(getProfileData)
   const error = useSelector(getProfileError)
   const isLoading = useSelector(getProfileIsLoading)


   return (
      <div className={classNames(styles.ProfileCard, {}, [className])}>

         <div className={styles.header}>
            <Text title={t('Профиль')} />
            <Button
               className={styles.editBtn}
               theme={ThemeButton.OUTLINE}
            >
               {t('Редактировать')}
            </Button>
         </div>

         <div className={styles.data}>
            <Input
               value={data?.firstname}
               placeholder={t('Ваше имя')}
               className={styles.input}
            />
            <Input
               value={data?.lastname}
               placeholder={t('Ваше фамилия')}
               className={styles.input}
            />
         </div>

      </div>
   )
}
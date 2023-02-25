import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import styles from './LoginForm.module.scss'



interface LoginFormProps {
   className?: string
}



const LoginForm = ({ className }: LoginFormProps) => {
   const { t } = useTranslation()


   return (
      <div
         className={classNames(styles.LoginModal, {}, [className])}
      >
         <Input
            className={styles.input}
            type='text'
            autofocus
            placeholder={t('Введите имя')}
         />
         <Input
            className={styles.input}
            type='text'
            placeholder={t('Введите пароль')}
         />

         <Button className={styles.loginBtn}>
            {t('Войти')}
         </Button>
      </div>
   )
}


export default LoginForm
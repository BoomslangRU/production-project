import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../services/loginByUsername/loginByUsername'

import styles from './LoginForm.module.scss'



interface LoginFormProps {
   className?: string
}



const LoginForm = memo(({ className }: LoginFormProps) => {
   const { t } = useTranslation()
   const dispatch = useDispatch()
   const { username, password, error, isLoading } = useSelector(getLoginState)


   const onChangeUsername = useCallback((value: string) => {
      dispatch(loginActions.setUsername(value))
   }, [dispatch])

   const onChangePassword = useCallback((value: string) => {
      dispatch(loginActions.setPassword(value))
   }, [dispatch])

   const onLoginClick = useCallback(() => {
      dispatch(loginByUsername({ username, password }))
   }, [dispatch, username, password])


   return (
      <div
         className={classNames(styles.LoginModal, {}, [className])}
      >
         <Text title={t('Форма авторизации')} />
         {error
            ? <Text
               text={t('Вы ввели неверный логин или пароль')}
               theme={TextTheme.ERROR}
            />
            : null
         }

         <Input
            className={styles.input}
            type='text'
            autofocus
            placeholder={t('Введите имя')}
            value={username}
            onChange={onChangeUsername}
         />
         <Input
            className={styles.input}
            type='text'
            placeholder={t('Введите пароль')}
            value={password}
            onChange={onChangePassword}
         />

         <Button
            className={styles.loginBtn}
            theme={ThemeButton.OUTLINE}
            disabled={isLoading}
            onClick={onLoginClick}
         >
            {t('Войти')}
         </Button>
      </div>
   )
})


export default LoginForm
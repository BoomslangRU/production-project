import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../services/loginByUsername/loginByUsername'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import {
   DynamicModuleLoader,
   ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import styles from './LoginForm.module.scss'



export interface LoginFormProps {
   className?: string
}

const initialReducers: ReducersList = {
   loginForm: loginReducer
}



const LoginForm = memo(({ className }: LoginFormProps) => {
   const { t } = useTranslation()
   const dispatch = useDispatch()
   const username = useSelector(getLoginUsername)
   const password = useSelector(getLoginPassword)
   const isLoading = useSelector(getLoginIsLoading)
   const error = useSelector(getLoginError)


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
      <DynamicModuleLoader
         removeAfterUnmount={true}
         reducers={initialReducers}
      >
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
      </DynamicModuleLoader>
   )
})


export default LoginForm
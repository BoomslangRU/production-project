import { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { getUserAuthData, userActions } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch/useAppDispatch'

import styles from './Navbar.module.scss'



interface NavbarProps {
   className?: string
}



export const Navbar = memo(({ className }: NavbarProps) => {
   const { t } = useTranslation()
   const dispatch = useAppDispatch()
   const [isAuthModal, setIsAuthModal] = useState(false)
   const authData = useSelector(getUserAuthData)


   const onCloseModal = useCallback(() => {
      setIsAuthModal(false)
   }, [])

   const onShowModal = useCallback(() => {
      setIsAuthModal(true)
   }, [])

   const onLogout = useCallback(() => {
      dispatch(userActions.logout())
   }, [dispatch])


   if (authData) {
      return (
         <div className={classNames(styles.Navbar, {}, [className])}>
            <Button
               className={styles.links}
               theme={ThemeButton.CLEAR_INVERTED}
               onClick={onLogout}
            >
               {t('Выйти')}
            </Button>
         </div>
      )
   }


   return (
      <div className={classNames(styles.Navbar, {}, [className])}>
         <Button
            className={styles.links}
            theme={ThemeButton.CLEAR_INVERTED}
            onClick={onShowModal}
         >
            {t('Войти')}
         </Button>

         {isAuthModal
            ? <LoginModal
               isOpen={isAuthModal}
               onClose={onCloseModal}
            />
            : null
         }
      </div>
   )
})
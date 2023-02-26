import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { getUserAuthData, userActions } from 'entities/User'

import styles from './Navbar.module.scss'



interface NavbarProps {
   className?: string
}



export const Navbar = ({ className }: NavbarProps) => {
   const { t } = useTranslation()
   const dispatch = useDispatch()
   const [isAuthModal, setIsAuthModal] = useState(false)
   const authData = useSelector(getUserAuthData)


   const onCloseModal = useCallback(() => {
      setIsAuthModal(false)
   }, [])

   const onShowModal = useCallback(() => {
      setIsAuthModal(true)
   }, [])

   const onLogout = useCallback(() => {
      setIsAuthModal(false)
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

         <LoginModal
            isOpen={isAuthModal}
            onClose={onCloseModal}
         />
      </div>
   )
}
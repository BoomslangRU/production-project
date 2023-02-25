import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'

import styles from './Navbar.module.scss'



interface NavbarProps {
   className?: string
}



export const Navbar = ({ className }: NavbarProps) => {
   const { t } = useTranslation()
   const [isAuthModal, setIsAuthModal] = useState(false)

   const onCloseModal = useCallback(() => {
      setIsAuthModal(false)
   }, [])

   const onShowModal = useCallback(() => {
      setIsAuthModal(true)
   }, [])


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
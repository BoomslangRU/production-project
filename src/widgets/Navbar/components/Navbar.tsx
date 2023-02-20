/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

import styles from './Navbar.module.scss'



interface NavbarProps {
   className?: string
}



export const Navbar = ({ className }: NavbarProps) => {
   const { t } = useTranslation()
   const [isAuthModal, setIsAuthModal] = useState(false)

   const onToggleModal = useCallback(() => {
      setIsAuthModal(prev => !prev)
   }, [])


   return (
      <div className={classNames(styles.Navbar, {}, [className])}>
         <Button
            className={styles.links}
            theme={ThemeButton.CLEAR_INVERTED}
            onClick={onToggleModal}
         >
            {t('Войти')}
         </Button>
         <Modal
            isOpen={isAuthModal}
            onClose={onToggleModal}
         >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facere at ipsa rerum quas animi similique, ullam fuga est eos quos?
         </Modal>
      </div>
   )
}
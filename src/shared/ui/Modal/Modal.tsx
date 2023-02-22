import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

import styles from './Modal.module.scss'



interface ModalProps {
   className?: string
   children?: ReactNode
   isOpen: boolean
   onClose: () => void
}

const ANIMATION_DELAY = 300



export const Modal = (props: ModalProps) => {
   const {
      className,
      children,
      isOpen,
      onClose
   } = props

   const [isClosing, setIsClosing] = useState(false)
   const timerRef = useRef<ReturnType<typeof setTimeout>>()
   const { theme } = useTheme()


   const closeHandler = useCallback(() => {
      if (onClose) {
         setIsClosing(true)
         timerRef.current = setTimeout(() => {
            onClose()
            setIsClosing(false)
         }, ANIMATION_DELAY)
      }
   }, [onClose])

   const onKeyDown = useCallback((e: KeyboardEvent) => {
      if (e.key === 'Escape') {
         closeHandler()
      }
   }, [closeHandler])

   const onContextClick = (e: React.MouseEvent) => e.stopPropagation()

   useEffect(() => {
      if (isOpen) {
         window.addEventListener('keydown', onKeyDown)
      }

      return () => {
         clearTimeout(timerRef.current)
         window.removeEventListener('keydown', onKeyDown)
      }
   }, [isOpen, onKeyDown])

   const mods: Record<string, boolean> = {
      [styles.opened]: isOpen,
      [styles.isClosing]: isClosing
   }


   return (
      <Portal>
         <div className={classNames(styles.Modal, mods, [className, theme, 'app_modal'])}>
            <div
               className={styles.overlay}
               onClick={closeHandler}
            >
               <div
                  className={styles.content}
                  onClick={onContextClick}
               >
                  {children}
               </div>
            </div>
         </div>
      </Portal>
   )
}

import {
   InputHTMLAttributes,
   memo,
   useEffect,
   useRef,
   useState
} from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Input.module.scss'



type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
   className?: string
   value?: string
   onChange?: (value: string) => void
   autofocus?: boolean
}



export const Input = memo((props: InputProps) => {
   const {
      className,
      value,
      onChange,
      type = 'text',
      placeholder,
      autofocus,
      ...otherProps
   } = props

   const ref = useRef<HTMLInputElement>(null)
   const [isFocused, setIsFocused] = useState(false)
   const [caretPosition, setCaretPosition] = useState(0)

   useEffect(() => {
      if (autofocus) {
         setIsFocused(true)
         ref.current?.focus()
      }
   }, [autofocus])


   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value)
      setCaretPosition(e.target.value?.length)
   }

   const onBlur = () => setIsFocused(false)

   const onFocus = () => setIsFocused(true)

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const onSelect = (e: any) => {
      setCaretPosition(e?.target?.selectionStart || 0)
   }


   return (
      <div className={classNames(styles.InputWrapper, {}, [className])}>
         {placeholder
            ? <div className={styles.placeholder}>
               {`${placeholder}>`}
            </div>
            : null
         }

         <div className={styles.caretWrapper}>
            <input
               className={styles.input}
               ref={ref}
               type={type}
               value={value}
               onChange={onChangeHandler}
               onBlur={onBlur}
               onFocus={onFocus}
               onSelect={onSelect}
               // eslint-disable-next-line react/jsx-props-no-spreading
               {...otherProps}
            />
            {isFocused
               ? <span
                  className={styles.caret}
                  style={{ left: `${caretPosition * 9}px` }}
               />
               : null
            }
         </div>

      </div>
   )
})
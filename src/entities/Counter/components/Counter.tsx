import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Button } from 'shared/ui/Button/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch/useAppDispatch'



export const Counter = () => {
   const dispatch = useAppDispatch()
   const { t } = useTranslation()
   const counterValue = useSelector(getCounterValue)

   const increment = () => {
      dispatch(counterActions.increment())
   }

   const decrement = () => {
      dispatch(counterActions.decrement())
   }


   return (
      <div>
         <h1 data-testid='value-title'>{counterValue}</h1>
         <Button
            data-testid='increment-btn'
            onClick={increment}
         >
            {t('увеличение')}
         </Button>
         <Button
            data-testid='decrement-btn'
            onClick={decrement}
         >
            {t('Уменьшение')}
         </Button>
      </div>
   )
}
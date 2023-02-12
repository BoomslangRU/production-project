import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from 'shared/ui/Button/Button'



// Component to test ErrorBoundary
export const BugButton = () => {
   const [isError, setIsError] = useState(false)
   const { t } = useTranslation()

   useEffect(() => {
      if (isError) {
         throw new Error()
      }
   }, [isError])


   const onThrow = () => setIsError(true)


   return (
      <Button
         onClick={onThrow}
      >
         {t('бросить ошибку')}
      </Button>
   )
}
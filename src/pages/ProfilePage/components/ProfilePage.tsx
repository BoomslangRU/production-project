import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch/useAppDispatch'
import {
   DynamicModuleLoader,
   ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ThunkConfig } from 'app/providers/StoreProvider'



const reducers: ReducersList = {
   profile: profileReducer
}

interface ProfilePageProps {
   className?: string
}



const ProfilePage = ({ className }: ProfilePageProps) => {
   const { t } = useTranslation('profile')
   const dispatch = useAppDispatch()

   useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch(fetchProfileData())
   }, [dispatch])


   return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
         <div className={classNames('', {}, [className])}>
            <ProfileCard />
         </div>
      </DynamicModuleLoader>
   )
}


export default ProfilePage
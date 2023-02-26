import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRoutes } from './providers/routes'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { userActions } from 'entities/User'



const App = () => {
   const { theme } = useTheme()
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(userActions.initAuthData())
   }, [dispatch])


   return (
      <div className={classNames('app', {}, [theme])}>
         <Suspense fallback='Loading'>
            <Navbar />
            <div className='content-page'>
               <Sidebar />
               <AppRoutes />
            </div>
         </Suspense>
      </div>
   )
}


export default App
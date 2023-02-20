import { Suspense } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRoutes } from './providers/routes'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'



const App = () => {
   const { theme } = useTheme()


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
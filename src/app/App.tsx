import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRoutes } from './providers/routes'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import './styles/index.scss'




const App = () => {
   const { theme } = useTheme()

   return (
      <div className={classNames('app', {}, [theme])}>
         <Navbar />
         <div className='content-page'>
            <Sidebar />
            <AppRoutes />
         </div>
      </div>
   )
}


export default App
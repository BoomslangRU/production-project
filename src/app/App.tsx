import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRoutes } from './providers/routes'
import { Navbar } from 'widgets/Navbar'

import './styles/index.scss'



const App = () => {
   const { theme, toggleTheme } = useTheme()

   return (
      <div className={classNames('app', {}, [theme])}>
         <Navbar />
         <button onClick={toggleTheme}>TOGGLE</button>
         <AppRoutes />
      </div>
   )
}


export default App
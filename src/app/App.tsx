import { Link } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRoutes } from './providers/routes'

import './styles/index.scss'


const App = () => {
   const { theme, toggleTheme } = useTheme()

   return (
      <div className={classNames('app', {}, [theme])}>
         <button onClick={toggleTheme}>TOGGLE</button>
         <Link to={'/'}>Главная</Link>
         <Link to={'/about'}>О сайте</Link>
         <AppRoutes />
      </div>
   )
}

export default App
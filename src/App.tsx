import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

import './styles/index.scss'



const App = () => {
   const { theme, toggleTheme } = useTheme()

   return (
      <div className={classNames('app', {}, [theme])}>
         <button onClick={toggleTheme}>TOGGLE</button>
         <Link to={'/'}>Главная</Link>
         <Link to={'/about'}>О сайте</Link>
         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route path={'/about'} element={<AboutPageLazy />} />
               <Route path={'/'} element={<MainPageLazy />} />
            </Routes>
         </Suspense>
      </div>
   )
}

export default App
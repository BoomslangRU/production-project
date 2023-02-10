import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routesConfig } from 'shared/config/routesConfig/routesConfig'
import { PageLoader } from 'widgets/PageLoader/components/PageLoader'



const AppRoutes = () => {

   return (
      <Routes>
         {Object.values(routesConfig)?.map(({ path, element }) => (
            <Route
               key={path}
               path={path}
               element={(
                  <Suspense fallback={<PageLoader />}>
                     <div className='page-wrapper'>
                        {element}
                     </div>
                  </Suspense>
               )}
            />
         ))}
      </Routes>
   )
}


export default AppRoutes
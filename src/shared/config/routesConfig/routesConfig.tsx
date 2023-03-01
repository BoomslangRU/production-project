import { AboutPage } from 'pages/AboutPage'

import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'



export enum AppRoutes {
   MAIN = 'main',
   ABOUT = 'about',
   PROFILE = 'profile',

   // last
   NOT_FOUND = 'not_found'
}

export const RoutesPath: Record<AppRoutes, string> = {
   [AppRoutes.MAIN]: '/',
   [AppRoutes.ABOUT]: '/about',
   [AppRoutes.PROFILE]: '/profile',

   //last
   [AppRoutes.NOT_FOUND]: '*'
}


export const routesConfig: Record<AppRoutes, RouteProps> = {
   [AppRoutes.MAIN]: {
      path: RoutesPath.main,
      element: <MainPage />
   },
   [AppRoutes.ABOUT]: {
      path: RoutesPath.about,
      element: <AboutPage />
   },
   [AppRoutes.PROFILE]: {
      path: RoutesPath.profile,
      element: <ProfilePage />
   },

   // last
   [AppRoutes.NOT_FOUND]: {
      path: RoutesPath.not_found,
      element: <NotFoundPage />
   },
}
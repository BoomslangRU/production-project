import { $api } from './instance'

import type { LoginByUsernameData }
   from 'features/AuthByUsername/services/loginByUsername/loginByUsername'
import type { User } from 'entities/User'
import type { Profile } from 'entities/Profile'



export const API = {
   postLogin(authData: LoginByUsernameData) {
      return $api.post<User>('/login', authData)
   },

   getProfile() {
      return $api.get<Profile>('/profile')
   }
}
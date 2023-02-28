export interface User {
   readonly id: number
   username: string
}

export interface UserSchema {
   authData?: User
} 
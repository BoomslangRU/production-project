import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'


export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || ''
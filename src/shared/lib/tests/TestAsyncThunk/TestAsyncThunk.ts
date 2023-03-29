import { AsyncThunkAction } from '@reduxjs/toolkit'
import { AxiosStatic } from 'axios'

import { StateSchema } from 'app/providers/StoreProvider'
import { API } from 'shared/api/api'



type ActionCreatorType<Return, Arg, RejectedValue>
   = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

jest.mock('axios')

const mockedAxios = jest.mocked(API, true)



export class TestAsyncThunk<Return, Arg, RejectedValue> {
   dispatch: jest.MockedFn<jest.MockableFunction>
   getState: () => StateSchema
   actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

   api: jest.MockedObjectDeep<typeof API>
   navigate: jest.Mocked<any>

   constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
      this.actionCreator = actionCreator
      this.dispatch = jest.fn()
      this.getState = jest.fn()
      this.api = mockedAxios
      this.navigate = jest.fn()
   }


   async callThunk(arg: Arg) {
      const action = this.actionCreator(arg)
      const result = await action(
         this.dispatch,
         this.getState,
         {
            api: this.api,
            navigate: this.navigate
         }
      )

      return result
   }
}
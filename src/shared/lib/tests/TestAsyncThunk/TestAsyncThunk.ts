import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'



// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ActionCreatorType<Return, Arg, _>
   = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: string }>



export class TestAsyncThunk<Return, Arg, RejectedValue> {
   dispatch: jest.MockedFn<jest.MockableFunction>
   getState: () => StateSchema
   actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

   constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
      this.actionCreator = actionCreator
      this.dispatch = jest.fn()
      this.getState = jest.fn()
   }


   async callThunk(arg: Arg) {
      const action = this.actionCreator(arg)
      const result = await action(this.dispatch, this.getState, undefined)

      return result
   }
}
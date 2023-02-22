import { screen } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'

import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Counter } from './Counter'



const value = Math.floor(Math.random() * 100)

describe('Counter', () => {
   test('test render', () => {
      componentRender(<Counter />, {
         initialState: { counter: { value } },
      })
      expect(screen.getByTestId('value-title')).toHaveTextContent(`${value}`)
   })

   test('increment', () => {
      componentRender(<Counter />, {
         initialState: { counter: { value } },
      })
      userEvent.click(screen.getByTestId('increment-btn'))
      expect(screen.getByTestId('value-title')).toHaveTextContent(`${value + 1}`)
   })

   test('decrement', () => {
      componentRender(<Counter />, {
         initialState: { counter: { value } },
      })
      userEvent.click(screen.getByTestId('decrement-btn'))
      expect(screen.getByTestId('value-title')).toHaveTextContent(`${value - 1}`)
   })
})

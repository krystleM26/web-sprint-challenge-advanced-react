import React from 'react'

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CheckoutForm from './CheckoutForm'

// Write up the two tests here and make sure they are testing what the title shows

test('renders without errors', () => {
  render(<CheckoutForm />)
})

test('shows success message on submit with form details', () => {
  render(<CheckoutForm />)
  //    firstName Test
  const firstName = screen.getByText(/firstName/i)

  userEvent.type(firstName, 'ufuk')

  // lastName Test
  const lastName = screen.getByLabelText(/lastName/i)
  userEvent.type(lastName, ' gfhfghg')

  // Address Test
  const address = screen.getByLabelText(/address/i)
  userEvent.type(address, 'jhhhghj')
  // City Test

  const city = screen.getByLabelText(/city/i)
  userEvent.type(city, 'hjhgjhgj')

  const state = screen.getByLabelText(/state/i)
  userEvent.type(state, 'yuytty ')

  const zipCode = screen.getByLabelText(/zipCode/i)
  userEvent.type(zipCode, '97644 ')

  const button = screen.getByRole('button')
  userEvent.click(button)

  const confirmation = screen.queryByText("ufuk")
  expect(confirmation).toBeInTheDocument();
//   expect(confirmation).toBeTruthy();
//   expect(confirmation).not.toBeNull();


})

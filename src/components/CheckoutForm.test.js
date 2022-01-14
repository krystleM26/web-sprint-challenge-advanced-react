import React from 'react'
import MutationObserver from 'mutationobserver-shim'
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
  const firstName = screen.queryByText(/firstName/i)

  userEvent.type(firstName, ' ')

  // lastName Test
  const lastName = screen.queryByText(/lastName/i)
  userEvent.type(lastName, ' ')

  // Address Test
  const address = screen.getByLabelText(/address/i)
  userEvent.type(address, '')
  // City Test

  const city = screen.getByLabelText(/city/i)
  userEvent.type(city, '')

  const state = screen.getByLabelText(/state/i)
  userEvent.type(state, " ")
  
  const zipCode = screen.queryByText(/zipCode/i)
  userEvent.type(zipCode, " ");

  const button = screen.getByRole('button')
  userEvent.click(button)
  


})

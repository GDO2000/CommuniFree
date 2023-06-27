import { render, screen } from '@testing-library/react'
import SignIn from '../pages/index'
import '@testing-library/jest-dom'
 
describe('SignIn', () => {
  it('renders a heading', () => {
    render(<SignIn />)
 
    const heading = screen.getByRole('heading', {
      name: /Join the CommuniFree family!!/i,
    })
 
    expect(heading).toBeInTheDocument()
  })
})
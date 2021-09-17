import { screen } from '@testing-library/react'
import { renderWithTheme } from 'util/helpers'
import Header from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Header cartAmount={3} />)

    expect(screen.getByText(/3 itens/i)).toBeInTheDocument()
  })
})

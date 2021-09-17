import { screen } from '@testing-library/react'
import { renderWithTheme } from 'util/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Button backgroundColor="red" onClick={() => null}>
        Botão
      </Button>
    )

    expect(screen.getByRole('button', { name: /Botão/i })).toHaveStyle({
      backgroundColor: 'red'
    })
  })
})

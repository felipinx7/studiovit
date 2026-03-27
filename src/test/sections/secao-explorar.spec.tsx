import { render, screen } from '@testing-library/react'
import { SecaoExplorar } from '../../pages/sections/secao-explorar'

describe('Seção Explorar', () => {
  it('Renderização da seção de exploração', () => {
    render(<SecaoExplorar />)

    // Testando renderização do texto.
    expect(screen.getByText('EXPLORE NOSSAS SOLUÇÕES')).toBeInTheDocument()

    // Testando renderização da container dos cards de explorar
    expect(
      screen.getByTestId('container-dos-cards-explorar'),
    ).toBeInTheDocument()
  })
})

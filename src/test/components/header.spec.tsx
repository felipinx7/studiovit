import { render, screen } from '@testing-library/react'
import { Header } from '../../components/layout/header'

describe('Header', () => {
  it('testando a renderização do componente header', () => {
    render(<Header />)

    // Testando renderização do links do header.
    expect(screen.getAllByText('Inicio')).toHaveLength(2)
    expect(screen.getAllByText('Serviço')).toHaveLength(2)
    expect(screen.getAllByText('Trabalho')).toHaveLength(2)
    expect(screen.getAllByText('Processo')).toHaveLength(2)

    //Testando redenrização do botão.
    expect(
      screen.getByRole('button', { name: 'contate-nos' }),
    ).toBeInTheDocument()

  })
})

import { render, screen } from '@testing-library/react'
import { SecaoTrabalho } from '../../pages/sections/secao-trabalhos'

describe('Seção de Trabalhos', () => {
  it('Testando a renderização da seção de trabalho', () => {
    render(<SecaoTrabalho />)

    // Testando renderização seção de trabalho
    expect(screen.getByTestId('container-trabalhos')).toBeInTheDocument()
  })
})

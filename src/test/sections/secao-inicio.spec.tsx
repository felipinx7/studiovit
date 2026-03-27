import { render, screen } from '@testing-library/react'
import { SecaoInicio } from '../../pages/sections/secao-inicio'

describe('Seção de Inicio', () => {
  it('Testando renderização da seção inicio', () => {
    render(<SecaoInicio />)

    // Testando renderização dos textos da seção principal.
    expect(
      screen.getByRole('heading', {
        name: /criamos mais que estética criamos resultados/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /do conceito ao resultado: transformamos sua ideia em algo que chama atenção e converte/i,
      ),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Agendar Serviço' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: 'Ver como funciona' }))
  })
})

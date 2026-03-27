import { render, screen } from '@testing-library/react'
import { SecaoContato } from '../../pages/sections/secao-contato'

describe('Seção Contato', () => {
  it('Testando renderização da seção de contato', () => {
    render(<SecaoContato />)

    // Testando renderização dos textos.
    expect(screen.getByText(/contate-nos/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /conheça os nossos meios de comunicação/i,
      }),
    ).toBeInTheDocument()

    // Testando botões de contato
    expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })
})

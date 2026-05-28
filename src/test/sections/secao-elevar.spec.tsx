import { render, screen } from '@testing-library/react'
import { SecaoElevar } from '../../pages/sections/secao-elevar'

describe('Seção Elevar', () => {
  it('Testando renderização da seção elevar', () => {
    render(<SecaoElevar />)

    // Testando renderização dos textos.
    expect(
      screen.getByText(/CHEGA DE PASSAR DESPERCEBIDO/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /Se você chegou até aqui, já deu o primeiro passo. Abaixo está tudo que você precisa para a gente começar junto./i,
      ),
    ).toBeInTheDocument()
  })
})

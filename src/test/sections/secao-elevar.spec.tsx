import { render, screen } from '@testing-library/react'
import { SecaoElevar } from '../../pages/sections/secao-elevar'

describe('Seção Elevar', () => {
  it('Testando renderização da seção elevar', () => {
    render(<SecaoElevar />)

    // Testando renderização dos textos.
    expect(
      screen.getByText(/Vamos elevar sua presença no digital/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /Ganhe mais visibilidade e se posicione melhor no mercado com soluções criativas que chamam atenção e convertem./i,
      ),
    ).toBeInTheDocument()
  })
})

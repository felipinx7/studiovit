import { render, screen } from '@testing-library/react'
import { CardFaq } from '../../components/ui/card-faq'

describe('Card FAQ', () => {
  it('Testando renderização do card faq', () => {
    render(<CardFaq />)

    // Testando renderização da pergunta
    expect(screen.getByTestId('pergunta')).toBeInTheDocument()
    // Testando renderização do icone
    expect(screen.getByTestId('icone')).toBeInTheDocument()
    // Testando renderização da resposta
    expect(screen.getByTestId('resposta')).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { SectionFaq } from '../../pages/sections/section-faq'

describe('Seção de Perguntas', () => {
  it('Testando renderização de seção de perguntas', () => {
    render(<SectionFaq />)

    // Testando renderização dos textos da seção
    expect(screen.getByText(/perguntas frequentes/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Respostas para perguntas que você pode ter:/i),
    ).toBeInTheDocument()

    // Testando container dos cards faq
    expect(screen.getByTestId('container-card-faq')).toBeInTheDocument()
  })
})

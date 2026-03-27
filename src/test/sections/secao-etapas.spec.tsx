import { render, screen } from '@testing-library/react'
import { SecaoEtapa } from '../../pages/sections/secao-etapa'

describe('Seção de Etapa', () => {
  it('Testando renderização da seçãp de etapa', () => {
    render(<SecaoEtapa />)
    expect(screen.getByText(/Como iniciar seu projeto/i)).toBeInTheDocument()
    expect(screen.getByTestId('container-cards-etapa')).toBeInTheDocument()
  })
})

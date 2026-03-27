import { render, screen } from '@testing-library/react'
import { CardEtapa } from '../../components/ui/card-etapa'

describe('Card de Etapa', () => {
  it('Testando renderização do Card Etapa', () => {
    render(<CardEtapa />)

    // Testando icone do card etapa.
    expect(screen.getByTestId('container-icone')).toBeInTheDocument()

    // Testando texto etapa do card etapa.
    expect(screen.getByTestId('etapa')).toBeInTheDocument()

    // Testando descrição do card etapa.
    expect(screen.getByTestId('descricao')).toBeInTheDocument()
  })
})

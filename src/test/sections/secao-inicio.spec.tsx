import { render, screen } from '@testing-library/react'
import { SecaoInicio } from '../../pages/sections/secao-inicio'

describe('Seção de Inicio', () => {
  it('Testando renderização da seção inicio', () => {
    render(<SecaoInicio />)

    // Testando renderização dos textos da seção principal.
    expect(
      screen.getByRole('heading', {
        name: /Opa, chegou no LUGAR CERTO!/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /SE VOCÊ QUER ENTENDER COMO POSSO VALORIZAR A IMAGEM DA SUA EMPRESA OU RECEBER UM ORÇAMENTO, CLICA NO BOTÃO A BAIXO./i,
      ),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Agendar Serviço' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: 'Ver como funciona' }))
  })
})

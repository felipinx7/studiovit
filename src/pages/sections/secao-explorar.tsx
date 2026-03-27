import { CardExplorar } from '../../components/ui/card-explorar'
import { textoCardSolucao } from '../../constants/texto-card-solucao'

export function SecaoExplorar() {
  return (
    <section id='servico' z-10 className="flex w-full relativej items-start justify-center px-5 py-36 md:px-6 max-md:py-10">
      <div className="flex w-full max-w-[1280px] z-10 flex-col items-center justify-between gap-10">
        {/* Conatiner de texto */}
        <div data-aos="fade-right" className="flex w-full justify-center max-md:pt-12 text-center text-4xl font-bold">
          <h1>EXPLORE NOSSAS SOLUÇÕES</h1>
        </div>

        {/* container dos cards */}
        <div data-testid="container-dos-cards-explorar" className="w-full items-center justify-center">
          <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {textoCardSolucao.map((link) => (
              <CardExplorar
                linkWhatsapp={link.linkWhatsapp}
                descricao={link.descricao}
                icone={link.icone}
                nomeSolucao={link.nomeSolucao}
                key={link.nomeSolucao}
                direcao={link.direcao}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

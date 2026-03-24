import { CardExplorar } from '../../components/ui/card-explorar'
import { textoCardSolucao } from '../../constants/texto-card-solucao'

export function SecaoExplorar() {
  return (
    <section className="flex h-screen w-full items-start justify-center px-5 py-20 md:px-6 md:py-15">
      <div className="flex w-full max-w-[1280px] flex-col items-center justify-between gap-10">
        {/* Conatiner de texto */}
        <div className="flex w-full justify-center text-center text-4xl font-bold">
          <h1>EXPLORE NOSSAS SOLUÇÕES</h1>
        </div>

        {/* container dos cards */}
        <div className="w-full items-center justify-center">
          <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {textoCardSolucao.map((link) => (
              <CardExplorar
                linkWhatsapp={link.linkWhatsapp}
                descricao={link.descricao}
                icone={link.icone}
                nomeSolucao={link.nomeSolucao}
                key={link.nomeSolucao}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

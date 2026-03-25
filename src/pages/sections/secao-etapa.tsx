import { CardEtapa } from '../../components/ui/card-etapa'
import { textCardEtapa } from '../../constants/text-card-etapa'

export function SecaoEtapa() {
  return (
    <section className="flex w-full items-center justify-center pt-28 max-md:pt-40">
      <div className="mt-0 flex w-[180%] max-w-[1280px] flex-col items-start justify-center gap-16 py-4">
        {/* container do texto  */}
        <div className="flex w-full justify-center text-center text-4xl font-bold">
          <h1>COMO INICIAR SEU PROJETO</h1>
        </div>

        {/* container dos cards */}

        <div className="w-full items-center justify-center px-8">
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2">
            {textCardEtapa.map((link) => (
              <CardEtapa {...link} key={link.numeroEtapa} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

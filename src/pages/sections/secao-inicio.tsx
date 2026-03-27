import { fundoOnda, ondas } from '../../assets/image'
import { CardApresentacao } from '../../components/ui/card-apresentacao'

export function SecaoInicio() {
  return (
    <section
      id="inicio"
      className="flex w-full items-center justify-center px-12 pt-42 pb-28 max-md:pt-52"
    >
      <div className="z-10 mt-0 flex w-[100%] max-w-[1280px] items-center justify-center max-md:pt-48">
        {/* container do conteúdo principal */}
        <div className="flex flex-col items-center justify-center gap-4 max-md:-translate-y-8">
          {/* container do card de apresentação */}
          <div className="flex w-auto justify-center">
            <CardApresentacao />
          </div>

          {/* container de textos */}
          <div className="flex flex-col gap-3 max-md:gap-2">
            <div className="flex w-full justify-center">
              <h1 className="responsive-heading w-[70%] text-center text-[3.3rem] leading-15 font-bold tracking-[-0.11rem] max-md:w-full max-md:text-[3rem] max-md:leading-11">
                CRIAMOS MAIS QUE ESTÉTICA CRIAMOS{' '}
                <b className="text-primary-100 font-bold">RESULTADOS.</b>
              </h1>
            </div>
            <p className="font-family-secondary text-center text-[1.1rem] font-normal max-md:text-[0.9rem] max-md:leading-4">
              Do conceito ao resultado: transformamos sua ideia em algo{' '}
              <br className="flex max-sm:hidden" />
              que chama atenção e converte.
            </p>
          </div>

          {/* container dos botões  */}
          <div className="font-family-secondary responsive-layout mt-4 flex items-center justify-center gap-4 max-sm:w-full">
            <button className="from-primary-100 h-auto w-auto cursor-pointer rounded-[10px] bg-gradient-to-r to-amber-500 px-8 py-3 text-[1rem] font-bold text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 max-sm:w-full max-sm:wrap-break-word">
              <p className="break-all">Agendar Serviço </p>
            </button>
            <button className="outline-primary-100 hover:bg-primary-100 hover:bg-opacity-10 h-auto w-auto cursor-pointer rounded-[10px] px-8 py-3 text-[1rem] font-medium outline outline-2 outline-offset-[-2px] transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 max-sm:w-full">
              <p>Ver como funciona</p>
            </button>
          </div>
        </div>
      </div>

      <img
        src={ondas}
        className="absolute bottom-0 left-0 z-0 w-[50000px] translate-x-[-1rem] translate-y-[5rem] max-lg:translate-y-[3rem] max-md:hidden"
        alt=""
      />

      <img src={fundoOnda} className="absolute z-0" alt="" />
    </section>
  )
}

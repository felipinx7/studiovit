import { LayoutOnda } from '../../components/layout/layout-onda'
import { CardApresentacao } from '../../components/ui/card-apresentacao'

export function SecaoInicio() {
  return (
    <section className="relative z-10 flex h-auto w-full flex-col items-center pt-60 max-sm:justify-center">
      {/* container do conteúdo principal */}
      <div className="flex flex-col max-sm:px-3 items-center justify-center gap-4 max-sm:pb-10">
        {/* container do card de apresentação */}
        <div className="flex w-auto justify-center">
          <CardApresentacao />
        </div>

        {/* container de textos */}
        <div className="flex w-full justify-center">
          <h1 className="w-[70%] responsive-heading  text-center text-[3.3rem] leading-15 font-bold tracking-[-0.11rem] max-md:w-full max-md:text-[3rem] max-md:leading-11">
            CRIAMOS MAIS QUE ESTÉTICA CRIAMOS{' '}
            <b className="text-primary-100 font-bold">RESULTADOS.</b>
          </h1>
        </div>
        <p className="font-family-secondary text-center text-[1.1rem] font-normal max-md:text-[0.9rem]">
          Do conceito ao resultado: transformamos sua ideia em algo
          <br className="flex max-sm:hidden" />
          que chama atenção e converte
        </p>

        {/* container dos botões  */}
        <div className="font-family-secondary flex items-center justify-center gap-4 max-sm:w-full max-sm:flex-col">
          <button className="from-primary-100 h-auto w-auto cursor-pointer rounded-[10px] bg-gradient-to-r to-amber-500 px-8 py-3 text-[1rem] font-bold text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 max-sm:w-full max-sm:wrap-break-word">
            <p className='break-all'>Agendar Serviço </p>
          </button>
          <button className="outline-primary-100 hover:bg-primary-100 hover:bg-opacity-10 h-auto w-auto cursor-pointer rounded-[10px] px-8 py-3 text-[1rem] font-medium outline outline-2 outline-offset-[-2px] transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 max-sm:w-full">
            <p>Ver como funciona</p>
          </button>
        </div>
      </div>

      <LayoutOnda />
    </section>
  )
}

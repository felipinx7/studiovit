import { CardApresentacao } from '../../components/ui/card-apresentacao'
import { CardTrabalho } from '../../components/ui/card-trabalho'
import { ImagemTrabalhos } from '../../constants/array-de-imagem'

export function SecaoInicio() {
  return (
    <section
      id="inicio"
      className="flex h-screen w-full items-center justify-center pt-10 pb-28 max-md:h-auto max-md:flex-col max-md:pt-20 max-md:pb-0"
    >
      <div className="z-10 mt-0 flex w-[100%] max-w-[1280px] items-center justify-center max-md:pt-48">
        {/* container do conteúdo principal */}
        <div className="flex flex-col items-center justify-center gap-4 max-md:-translate-y-8 max-md:px-12">
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
          <div className="font-family-secondary responsive-layout mt-4 flex items-center justify-center gap-4 max-md:pb-10 max-sm:w-full">
            <button className="from-primary-100 relative h-auto w-auto cursor-pointer overflow-hidden rounded-[10px] bg-gradient-to-r to-amber-500 px-8 py-3 text-[1rem] font-bold text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 max-sm:w-full">
              <span className="relative z-10">Agendar Serviço</span>

              <span className="shine-loop pointer-events-none" />
            </button>
            <button className="outline-primary-100 hover:bg-primary-100 hover:bg-opacity-10 h-auto w-auto cursor-pointer rounded-[10px] px-8 py-3 text-[1rem] font-medium outline outline-2 outline-offset-[-2px] transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 max-sm:w-full">
              <p>Ver como funciona</p>
            </button>
          </div>
        </div>
      </div>
      {/* cotainer scroll das artes */}

      <div
        data-testid="container-trabalhos"
        className="absolute z-0 w-full translate-y-[23rem] -rotate-[4deg] flex-col items-center justify-center gap-10 overflow-hidden max-md:relative max-md:translate-y-6 max-sm:translate-y-0"
      >
        <div className="absolute top-0 left-0 z-0 z-[2] h-[250px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#f7f6fb]/80 to-transparent opacity-60 blur-xl"></div>
        <div className="absolute top-0 right-0 z-0 z-[2] h-[250px] w-[500px] translate-x-[15rem] rounded-full bg-gradient-to-r from-transparent via-[#f7f6fb]/80 to-transparent opacity-60 blur-xl"></div>
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center justify-center gap-4">
            {ImagemTrabalhos.map((image, index) => (
              <CardTrabalho
                tamanhoCard="max-md:w-w-[200px] h-[300px] w-[250px]"
                imagem={image}
                key={index}
              />
            ))}

            {ImagemTrabalhos.map((image, index) => (
              <CardTrabalho
                tamanhoCard="max-md:w-w-[200px] h-[300px] w-[250px]"
                imagem={image}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

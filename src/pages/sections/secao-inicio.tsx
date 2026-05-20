import { fotosecaoprincipal } from '../../assets/image'
import { CardApresentacao } from '../../components/ui/card-apresentacao'
import { scrollParaIrSecao } from '../../utils/navegacao-header'

export function SecaoInicio() {
  return (
    <section
      id="inicio"
      className="flex h-auto w-full items-center justify-center overflow-hidden bg-[#1F1916] pt-10 pb-28 max-lg:h-auto max-lg:flex-col max-lg:pt-10 max-lg:pb-0"
    >
      <div className="z-10 mt-0 flex w-[100%] max-w-[1280px] items-center justify-between pt-32 max-lg:flex-col-reverse max-lg:pt-2">
        {/* container do conteúdo principal */}
        <div className="flex flex-col items-start justify-center gap-4 max-lg:-translate-y-8 max-lg:px-12">
          {/* container do card de apresentação */}
          <div className="flex w-auto justify-start">
            <CardApresentacao />
          </div>

          {/* container de textos */}
          <div className="flex flex-col gap-3 max-lg:gap-2">
            <div className="flex w-full justify-start text-left">
              <h1 className="responsive-heading font-family-burgundia w-[70%] text-[4.5rem] leading-19 font-bold tracking-[-0.11rem] text-white max-lg:w-full max-lg:text-[3rem] max-lg:leading-11">
                Opa, chegou no{' '}
                <b className="text-primary-100 font-family-primary font-bold">
                  LUGAR CERTO!
                </b>
              </h1>
            </div>
            <p className="font-family-secondary text-left text-[0.9rem] font-medium text-white max-lg:text-[0.9rem] max-lg:leading-4">
              SE VOCÊ QUER ENTENDER COMO POSSO VALORIZAR A <br />
              IMAGEM DA SUA EMPRESA OU RECEBER UM ORÇAMENTO, <br /> CLICA NO
              BOTÃO A BAIXO.
            </p>
          </div>

          {/* container dos botões  */}
          <div className="font-family-secondary responsive-layout mt-4 flex w-[50%] flex-col items-center justify-center gap-4 max-lg:pb-10 max-lg:w-full">
            <a
              href="https://wa.me/5588992179617?text=Olá, gostaria de mais informações sobre o seu trabalho!"
              className="flex w-full items-center justify-center gap-4 max-sm:w-full"
              target="_blank"
            >
              <button className="from-primary-100 relative h-auto w-full cursor-pointer overflow-hidden rounded-[10px] bg-gradient-to-r to-amber-500 px-8 py-3 py-4 text-[1rem] font-bold text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 max-sm:w-full">
                <span className="relative z-10">Agendar Serviço</span>

                <span className="shine-loop pointer-events-none" />
              </button>
            </a>
            <button
              onClick={() => scrollParaIrSecao('processo')}
              className="hover:text-primary-100 hover:bg-opacity-10 h-auto w-auto w-full cursor-pointer rounded-[10px] px-8 py-3 py-4 text-[1rem] font-medium text-white outline outline-2 outline-offset-[-2px] outline-white transition-all duration-300 ease-out hover:scale-105 hover:bg-white hover:font-bold hover:shadow-lg active:scale-95 max-sm:w-full"
            >
              <p className="w-full">Ver como funciona</p>
            </button>
          </div>
        </div>

        {/* container da foto vit  */}
        <div className="absolute left-0 w-full translate-x-[50%] -translate-y-[10%] max-lg:relative max-lg:translate-x-0 max-lg:-translate-y-[5%]">
          <img src={fotosecaoprincipal} width={700} height={350} />
        </div>
      </div>
    </section>
  )
}

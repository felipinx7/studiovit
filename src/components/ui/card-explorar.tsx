import { IconeSetaDireita } from '../../assets/icons/icone-seta-direita'
import type { InterfaceCardSolucao } from '../../interfaces/interface-card-solucao'

export function CardExplorar(props: InterfaceCardSolucao) {
  return (
    <article className="flex h-[280px] w-full flex-col items-center justify-between rounded-[1.1rem] bg-white p-4 shadow-[0px_0px_6px_0px_rgba(255,190,46,0.10)] duration-500 ease-in-out hover:scale-105 md:h-[300px] md:p-7">
      {/* container do icone e nome solução  */}
      <div className="flex w-full items-center justify-start gap-3 md:gap-4">
        {/* icone */}
        <div className="outline-primary-100 rounded-[8.40px] p-2 outline outline-3 outline-offset-[-2px] md:p-3">
          <props.icone className="" />
        </div>

        {/* nome solução  */}
        <div>
          <h5 className="line-clamp-2 text-sm font-bold md:text-base">
            {props.nomeSolucao}
          </h5>
        </div>
      </div>

      {/* container da descrição  */}
      <div>
        <p className="text-neutral-0/60 text-sm leading-relaxed md:text-base">
          {props.descricao}
        </p>
      </div>

      {/* container do botão */}
      <div className="bg-primary-100 flex w-full items-center justify-center rounded-[8.40px]">
        <button className="flex h-auto w-[80%] items-center justify-center p-2 text-center">
          <a
            target="_blank"
            href={props.linkWhatsapp}
            className="flex items-center justify-between gap-2 text-sm font-semibold md:gap-4 md:text-base"
          >
            Explorar Serviço <IconeSetaDireita />
          </a>
        </button>
      </div>
    </article>
  )
}

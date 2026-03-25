import type { InterfaceCardEtapa } from '../../interfaces/interface-card-etapa'

export function CardEtapa(props: InterfaceCardEtapa) {
  return (
    <article data-aos="fade-left">
      <div className="flex w-full flex-col items-start justify-start gap-2 rounded-[20px] bg-white p-6 shadow-[0px_0px_6px_0px_rgba(255,190,46,0.10)] transition-all duration-500 ease-in-out hover:scale-105">
        {/* container icone */}
        <div className="outline-primary-100 flex w-[70px] items-center justify-center rounded-[8.40px] px-4 py-3 outline outline-3 outline-offset-[-2px]">
          {<props.icone className="text-2xl" />}
        </div>

        {/* nome da etapa */}
        <b>{props.numeroEtapa}</b>

        {/* descrição da etapa   */}
        <p className="text-neutral-0 max-md:text-[0.9rem]">{props.descricao}</p>
      </div>
    </article>
  )
}

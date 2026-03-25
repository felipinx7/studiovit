import type { InterfaceCardEtapa } from '../../interfaces/interface-card-etapa'

export function CardEtapa(props: InterfaceCardEtapa) {
  return (
    <article className="flex w-full flex-col bg-white p-6 hover:scale-105 shadow-[0px_0px_6px_0px_rgba(255,190,46,0.10)] transition-all duration-500 ease-in-out rounded-[20px] gap-2 items-start justify-start">
      {/* container icone */}
      <div className="outline-primary-100 rounded-[8.40px] w-[70px] flex items-center justify-center px-4 py-3 outline outline-3 outline-offset-[-2px]">{<props.icone className="text-2xl" />}</div>

      {/* nome da etapa */}
      <b>{props.numeroEtapa}</b>

      {/* descrição da etapa   */}
      <p className='text-neutral-0 max-md:text-[0.9rem]'>{props.descricao}</p>
    </article>
  )
}

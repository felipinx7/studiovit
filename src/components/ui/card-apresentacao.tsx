import { IconeDesinger } from '../../assets/icons/icone-designer'

export function CardApresentacao() {
  return (
    <article className="mb-2 flex h-auto w-full items-center justify-center gap-2 rounded-xl border border-primary-100 px-3 py-3 leading-3 md:mb-4 md:gap-3 md:px-4">
      <div className="flex items-center justify-center gap-1 md:gap-2">
        <IconeDesinger />
        <p className="font-ligth text-[0.8rem] text-primary-100 md:text-[0.9rem]">DISPONÍVEL PARA NOVOS PROJETOS</p>
      </div>
    </article>
  )
}

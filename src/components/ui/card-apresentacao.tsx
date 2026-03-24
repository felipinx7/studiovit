import { IconeDesinger } from '../../assets/icons/icone-designer'

export function CardApresentacao() {
  return (
    <article className="mb-2 flex h-auto w-full items-center justify-center gap-2 rounded-xl border border-black px-3 py-2 leading-3 md:mb-4 md:gap-3 md:px-4">
      <div className="flex items-center justify-center gap-1 md:gap-2">
        <IconeDesinger />
        <p className="font-ligth text-[0.8rem] md:text-[0.9rem]">studiovit</p>
      </div>

      <p className="flex gap-1 text-[0.65rem] font-semibold md:text-[0.7rem]">
        <b className="">|</b>{' '}
        <span className="hidden md:inline">
          Vamos conversar sobre a sua ideia?
        </span>
        <span className="md:hidden">Sua ideia!</span>
      </p>
    </article>
  )
}

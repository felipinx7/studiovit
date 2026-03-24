import { IconeDesinger } from '../../assets/icons/icone-designer'

export function CardApresentacao() {
  return (
    <article className="mb-4 flex h-auto w-full items-center justify-center gap-3 rounded-xl border border-black px-4 py-2 leading-3">
      <div className="flex items-center justify-center gap-2">
        <IconeDesinger />
        <p className="font-ligth text-[0.9rem]">studiovit</p>
      </div>

      <p className="text-[0.7rem] gap-1 font-semibold flex">
        <b className=''>|</b> Vamos conversar sobre a sua ideia?
      </p>
    </article>
  )
}

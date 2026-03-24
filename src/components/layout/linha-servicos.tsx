import { textoTrabalhos } from '../../constants/textos-trabalhos'

export function LinhaServicos() {
  return (
    <article className="bg-primary-100 flex h-auto w-full items-center justify-center overflow-hidden px-3 py-2 md:px-6 md:py-6 ">
      <div className="animate-scroll-tags flex w-full items-center justify-between gap-6 whitespace-nowrap md:gap-8">
        {textoTrabalhos.map((link) => (
          <p className="w-full" key={link}>
            {link}
          </p>
        ))}
      </div>
    </article>
  )
}

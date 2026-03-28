interface InterfaceCardTrabalho {
  imagem: string
  tamanhoCard?: string
}

export function CardTrabalho({ imagem, tamanhoCard }: InterfaceCardTrabalho) {
  return (
    <article
      className={`${tamanhoCard ?? 'h-[400px] w-[350px]'} flex-shrink-0 overflow-hidden rounded-2xl`}
    >
      <img src={imagem} className="h-full z-0 w-full object-cover" alt="" />
    </article>
  )
}

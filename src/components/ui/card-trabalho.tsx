interface InterfaceCardTrabalho {
  imagem: string
}

export function CardTrabalho({ imagem }: InterfaceCardTrabalho) {
  return (
    <article className="h-[400px] max-md:h-[350px] max-md:w-[300px] w-[350px] overflow-hidden rounded-2xl">
      <img src={imagem} className="h-full w-full object-cover" alt="" />
    </article>
  )
}

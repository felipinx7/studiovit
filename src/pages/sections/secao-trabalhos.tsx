import { CardTrabalho } from '../../components/ui/card-trabalho'

const cards = Array.from({ length: 8 })

export function SecaoTrabalho() {
  return (
    <section className="flex w-full items-start justify-center py-4">
      <div className="flex w-full max-w-[1280px] flex-col gap-10 items-center justify-center">
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-4">
            {cards.map((_, i) => (
              <CardTrabalho key={`card-${i}`} />
            ))}
            {cards.map((_, i) => (
              <CardTrabalho key={`card-dup-${i}`} />
            ))}
          </div>
        </div>


        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-4">
            {cards.map((_, i) => (
              <CardTrabalho key={`card-${i}`} />
            ))}
            {cards.map((_, i) => (
              <CardTrabalho key={`card-dup-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

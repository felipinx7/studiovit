import {
  foto01,
  foto02,
  foto03,
  foto04,
  foto05,
  foto06,
  foto07,
  foto08,
  foto09,
  foto10,
} from '../../assets/image'
import { CardTrabalho } from '../../components/ui/card-trabalho'

export function SecaoTrabalho() {
  return (
    <section
      id="trabalho"
      className="flex w-full items-start justify-center py-4 max-md:pb-10"
    >
      <div data-testid="container-trabalhos" className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-10">
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-4">
            <CardTrabalho imagem={foto01} />
            <CardTrabalho imagem={foto02} />
            <CardTrabalho imagem={foto03} />
            <CardTrabalho imagem={foto04} />
            <CardTrabalho imagem={foto05} />
            <CardTrabalho imagem={foto01} />
            <CardTrabalho imagem={foto02} />
            <CardTrabalho imagem={foto03} />
            <CardTrabalho imagem={foto04} />
            <CardTrabalho imagem={foto05} />
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-4">
            <CardTrabalho imagem={foto06} />
            <CardTrabalho imagem={foto07} />
            <CardTrabalho imagem={foto08} />
            <CardTrabalho imagem={foto09} />
            <CardTrabalho imagem={foto10} />
            <CardTrabalho imagem={foto06} />
            <CardTrabalho imagem={foto07} />
            <CardTrabalho imagem={foto08} />
            <CardTrabalho imagem={foto09} />
            <CardTrabalho imagem={foto10} />
          </div>
        </div>
      </div>
    </section>
  )
}

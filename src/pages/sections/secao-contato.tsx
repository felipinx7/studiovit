import { IconeInstagram } from '../../assets/icons/icone-instagram'
import { IconeWhatsapp } from '../../assets/icons/icone-whatsapp'

export function SecaoContato() {
  return (
    <section
      id="contato"
      className="flex w-full items-center justify-center pt-32"
    >
      <div className="mt-0 flex w-[100%] max-w-[1280px] flex-col items-center justify-start gap-8">
        {/* container dos textos */}
        <div
          data-aos="fade-left"
          className="flex flex-col items-center justify-center gap-1"
        >
          <p className="font-medium tracking-[20%]">CONTATE-NOS</p>
          <h1 className="text-center text-[2rem] leading-9 font-bold max-md:text-[1.3rem] max-md:leading-7">
            CONHEÇA OS NOSSOS MEIOS DE <br />
            COMUNICAÇÃO
          </h1>
        </div>

        {/* container dos botões  */}
        <div
          data-aos="fade-left"
          className="flex w-full flex-col items-center justify-center gap-8"
        >
          <button className="text-neutral-0 hover:bg-primary-amarelo from-primary-100/0 flex w-[40%] items-center justify-center gap-3 rounded-2xl border-2 border-amber-400 bg-gradient-to-r to-amber-500/0 p-6 text-2xl font-medium shadow-md transition-all duration-500 hover:scale-105 hover:border-black max-md:w-[80%]">
            <a
              href="https://wa.me/5588992179617?text=Olá, gostaria de mais informações sobre o seu trabalho!"
              className="flex items-center justify-center gap-4"
              target="_blank"
            >
              <IconeWhatsapp />
              WhatsApp
            </a>
          </button>

          <button className="text-neutral-0 from-primary-100/0 hover:bg-primary-amarelo flex w-[40%] items-center justify-center gap-3 rounded-2xl border-2 border-amber-400 bg-gradient-to-r to-amber-500/0 p-6 text-2xl font-medium shadow-md transition-all duration-500 hover:scale-105 hover:border-black max-md:w-[80%]">
            <a
              href="https://www.instagram.com/studioviit/"
              target="_blank"
              className="flex items-center justify-center gap-4"
            >
              <IconeInstagram />
              Instagram
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

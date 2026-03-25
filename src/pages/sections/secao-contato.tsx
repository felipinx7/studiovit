import { IconeInstagram } from '../../assets/icons/icone-instagram'
import { IconeWhatsapp } from '../../assets/icons/icone-whatsapp'

export function SecaoContato() {
  return (
    <section className="flex w-full items-center justify-center pt-32 ">
      <div className="mt-0 flex w-[100%] max-w-[1280px] flex-col items-center justify-start gap-8">
        {/* container dos textos */}
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="font-medium tracking-[20%]">CONTATE-NOS</p>
          <h1 className="text-center text-[2rem] leading-9 font-bold">
            CONHEÇA OS NOSSOS MEIOS DE <br />
            COMUNICAÇÃO
          </h1>
        </div>

        {/* container dos botões  */}
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <button className="from-primary-100/0 text-neutral-0 hover:from-primary-100 flex inline-flex w-[40%] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r to-amber-500/0 p-6 text-2xl font-medium shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-[3px] outline-offset-[-3px] outline-amber-400 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:to-amber-500 hover:shadow-[0px_8px_20px_rgba(0,0,0,0.35)] max-md:w-[80%]">
            <a
              href="https://wa.me/5588992179617?text=Olá, gostaria de mais informações sobre o seu trabalho!"
              className="transition-all flex items-center justify-center gap-4 duration-300"
              target="_blank"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <IconeWhatsapp />
              </span>
              WhatsApp
            </a>
          </button>
          <button className="from-primary-100/0 text-neutral-0 hover:from-primary-100 flex inline-flex w-[40%] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r to-amber-500/0 p-6 text-2xl font-medium shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-[3px] outline-offset-[-3px] outline-amber-400 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:to-amber-500 hover:shadow-[0px_8px_20px_rgba(0,0,0,0.35)] max-md:w-[80%]">
            <a
              href="https://www.instagram.com/studioviit/"
              target="_blank"
              className="flex items-center justify-center gap-4"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <IconeInstagram />
              </span>
              Instagram
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

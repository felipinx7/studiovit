import { logoVit } from '../../assets/image'

export function Footer() {
  return (
    <footer className="flex w-full items-center justify-center pt-28 pb-4 max-md:pb-10">
      <div className="mt-0 flex w-[100%] max-w-[1280px] flex-col items-center justify-center gap-8">
        {/* linha do footer  */}
        <div className="h-0 w-full max-md:w-[80%] outline outline-1 outline-offset-[-0.50px] outline-black/30"></div>

        {/* container logo e a frase  */}
        <div className="flex w-full items-center max-md:flex-col max-md:gap-4 max-md:items-start max-md:w-[80%] justify-between">
          <img src={logoVit} className="w-[3rem] max-md:w-[4rem]" alt="" />
          <p className="text-right text-sm max-md:text-[1.1rem] max-md:text-left font-light">
            Elevando sua presença no digital com <br />{' '} <b className="text-primary-100 font-bold">criatividade{' '}</b>e{' '} <b className="text-primary-100 font-bold">estratégia</b>
          </p>
        </div>

        {/* container direitos autorais  */}
        <div className="flex w-full max-md:text-[1.1rem] items-center justify-center max-md:justify-start max-md:w-[80%]">
          <p className="text-neutral-0/80 text-sx font-family-secondary font-normal">
            &copy; 2026 Todos os direitos reservados{' '}
          </p>
        </div>
      </div>
    </footer>
  )
}

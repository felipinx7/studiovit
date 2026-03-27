import { useState } from 'react'
import { IconeBarra } from '../../assets/icons/icone-barra'
import { logoVit } from '../../assets/image'
import { textoLinkHeader } from '../../constants/links-header'
import { scrollParaIrSecao } from '../../utils/navegacao-header'

export function Header() {
  // Variveis utilizados no componente
  const [abrirHeader, setAbrirHeader] = useState(true)

  // Funções utilizadas no componente
  function ManipularVisibilidadeHeader() {
    setAbrirHeader((prev) => !prev)
  }
  return (
    <header className="w-full">
      <div className="flex h-auto items-center justify-between rounded-[30px] bg-zinc-100/80 px-7 py-4 backdrop-blur-2xl max-md:px-3 max-md:py-1">
        {/* HEADER DESKTOP  */}

        <div className="flex w-full items-center justify-between max-md:hidden">
          {/* Container da logo */}
          <div onClick={() => scrollParaIrSecao('inicio')}>
            <img
              src={logoVit}
              aria-label="logoVit"
              className="w-[3rem] cursor-pointer"
              alt=""
            />
          </div>

          {/* Container dos links */}
          <div className="flex items-center justify-between gap-4">
            {textoLinkHeader.map((link) => (
              <a
                key={link.section}
                onClick={() => scrollParaIrSecao(link.id)}
                className="text-neutral-0/60 after:bg-primary-100 hover:text-neutral-0 relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-0 after:transition-all after:duration-500 hover:after:w-full"
              >
                {link.nomeLink}
              </a>
            ))}
          </div>

          {/* botão de contato */}
          <button
            onClick={() => scrollParaIrSecao('contato')}
            className="from-primary-100 cursor-pointer rounded-[30px] bg-gradient-to-r to-amber-500 px-8 py-3 font-semibold text-white transition-all duration-[0.5s] ease-in-out hover:scale-105 hover:shadow-2xs"
          >
            contate-nos
          </button>
        </div>

        {/* HEADER MOBILE  */}
        <div
          className={`hidden w-full flex-col items-center justify-between ${abrirHeader ? 'gap-0' : 'gap-10'} overflow-hidden max-md:flex`}
        >
          {/* container informação logo e barras */}
          <div className="flex w-full items-center justify-between p-3">
            {/* container da logo  */}
            <div
              className="cursor-pointer"
              onClick={() => scrollParaIrSecao('inicio')}
            >
              <img src={logoVit} className="w-[3rem]" alt="" />
            </div>

            {/* container da abertura do menu  */}
            <div>
              <IconeBarra
                ManipularAbrirHeader={ManipularVisibilidadeHeader}
                abrirHeader={abrirHeader}
              />
            </div>
          </div>

          {/* container do menu  */}
          <div
            className={`flex w-full flex-col gap-4 px-4 transition-all duration-1000 ${
              abrirHeader
                ? 'max-h-0 scale-95 py-0 opacity-0'
                : 'max-h-[500px] scale-100 py-4 opacity-100'
            } `}
          >
            {textoLinkHeader.map((link) => (
              <a
                onClick={() => scrollParaIrSecao(link.id)}
                key={link.section}
                className="text-neutral-0/60 hover:text-neutral-0 text-[1.1rem]"
              >
                {link.nomeLink}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

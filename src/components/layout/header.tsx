import { useEffect, useState } from 'react'
import { IconeBarra } from '../../assets/icons/icone-barra'
import { logoMonocramatica, logoVit } from '../../assets/image'
import { textoLinkHeader } from '../../constants/links-header'
import { scrollParaIrSecao } from '../../utils/navegacao-header'

export function Header() {
  const [abrirHeader, setAbrirHeader] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isScrolledReal = isScrolled

  function ManipularVisibilidadeHeader() {
    setAbrirHeader((prev) => !prev)
  }

  return (
    <>
      {isScrolledReal && <div className="h-[100px]" />}

      <header
        className={`fixed left-0 z-50 w-full transition-all duration-500 ${
          isScrolledReal ? 'top-4 px-4' : 'top-0 px-0 max-md:bg-[#2A221E] bg-transparent max-md:backdrop-blur-2xl'
        }`}
      >
        <div
          className={`w-full transition-all duration-500 ${
            isScrolledReal ? 'bg-transparent' : ''
          }`}
        >
          <div
            className={`mx-auto flex max-w-[1280px] items-center justify-between transition-all duration-500 ${
              isScrolledReal
                ? 'rounded-[30px] bg-zinc-100/80 px-7 py-4 shadow-lg backdrop-blur-2xl'
                : 'px-6 py-4'
            }`}
          >
            {/* DESKTOP */}
            <div className="flex w-full items-center justify-between max-md:hidden">
              <div onClick={() => scrollParaIrSecao('inicio')}>
                <img
                  src={isScrolledReal ? logoVit : logoMonocramatica}
                  loading="lazy"
                  className={`${
                    isScrolledReal ? 'w-[7rem]' : 'w-[7rem]'
                  } cursor-pointer`}
                  alt=""
                />
              </div>

              <div className="flex items-center gap-4">
                {textoLinkHeader.map((link) => (
                  <a
                    key={link.section}
                    onClick={() => scrollParaIrSecao(link.id)}
                    className={`relative cursor-pointer transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-500 hover:after:w-full ${
                      isScrolledReal
                        ? 'text-neutral-0/60 hover:text-neutral-0 after:bg-primary-100'
                        : 'text-white after:bg-white hover:text-white'
                    }`}
                  >
                    {link.nomeLink}
                  </a>
                ))}
              </div>

              <button
                onClick={() => scrollParaIrSecao('contato')}
                className={`from-primary-100 cursor-pointer rounded-[30px] bg-gradient-to-r to-amber-500 px-8 py-3 font-semibold transition-all duration-500 hover:scale-105 ${
                  isScrolledReal ? 'text-black' : 'text-white'
                }`}
              >
                contate-nos
              </button>
            </div>

            {/* MOBILE */}
            <div
              className={`hidden w-full flex-col max-md:flex ${
                abrirHeader ? 'gap-0' : 'gap-10'
              } overflow-hidden`}
            >
              <div className="flex w-full items-center justify-between p-1">
                <div
                  className="cursor-pointer"
                  onClick={() => scrollParaIrSecao('inicio')}
                >
                  <img
                    src={isScrolledReal ? logoVit : logoMonocramatica}
                    loading="lazy"
                    className="w-[7rem] cursor-pointer max-md:w-[6rem]"
                    alt=""
                  />
                </div>

                <IconeBarra
                  scrollHeader={isScrolled}
                  ManipularAbrirHeader={ManipularVisibilidadeHeader}
                  abrirHeader={abrirHeader}
                />
              </div>

              <div
                className={`flex w-full flex-col gap-4 px-4 transition-all duration-700 ${
                  abrirHeader
                    ? 'max-h-0 scale-95 py-0 opacity-0'
                    : 'max-h-[500px] scale-100 py-4 opacity-100'
                }`}
              >
                {textoLinkHeader.map((link) => (
                  <a
                    key={link.section}
                    onClick={() => scrollParaIrSecao(link.id)}
                    className={`text-[1.1rem] ${isScrolled ? "text-black" : "text-white"}`}
                  >
                    {link.nomeLink}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

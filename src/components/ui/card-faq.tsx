import { useState } from 'react'
import { IconeMinimizar } from '../../assets/icons/icone-minimizar'
import { IconeSetBaixo } from '../../assets/icons/icone-seta-baixo'
import type { interfacePerguntasFrequente } from '../../interfaces/interface-perguntas-frequente'

export function CardFaq(props: interfacePerguntasFrequente) {
  // estados utilizados no componente
  const [abrirResposta, setAbrirResposta] = useState(false)

  // Funções utilizados no componente
  function handleAbrirResposta() {
    setAbrirResposta((prev) => !prev)
  }

  return (
    <article className="bg-primary-100 flex w-[80%] flex-col rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] px-4 py-3 transition-[max-height,opacity,transform] duration-500 ease-in-out max-md:h-auto max-md:w-[90%]">
      {/* container da pergunta  */}
      <div className="flex w-full items-center justify-between py-2">
        <h5 className="font-family-secondary text-[1.2rem] font-semibold max-md:text-[1rem]">
          {props.pergunta}
        </h5>
        <p className="cursor-pointer" onClick={handleAbrirResposta}>
          {abrirResposta ? (
            <IconeMinimizar className="w-12" />
          ) : (
            <IconeSetBaixo className="w-12" />
          )}
        </p>
      </div>

      {/* container da pergunta  */}
      <div
        className={`text-left transition-all duration-500 ease-in-out ${abrirResposta ? 'max-h-[96px] translate-y-0 opacity-100 max-md:max-h-full' : 'max-h-0 -translate-y-2 opacity-0'} `}
      >
        <p className="font-family-secondary text-neutral-0 w-[90%] text-[1.1rem] max-md:text-[0.9rem]">
          {props.resposta}
        </p>
      </div>
    </article>
  )
}

import type { InterfaceIconeBarra } from '../../interfaces/interface-icone-barra'

export function IconeBarra(props: InterfaceIconeBarra) {
  return (
    <button
      onClick={props.ManipularAbrirHeader}
      className="relative flex h-5 w-7 transition-all duration-500 cursor-pointer flex-col justify-between"
    >
      <span
        className={`line block h-1 rounded bg-black transition-all duration-300 ${props.abrirHeader === false ? 'rotate-45 translate-y-[0.5rem]' : ''}`}
      ></span>
      <span
        className={`line block h-1 rounded bg-black transition-all duration-300 ${props.abrirHeader === true ? '' : 'hidden'}`}
      ></span>
      <span
        className={`line block h-1 rounded bg-black transition-all duration-300 ${props.abrirHeader === false ? 'rotate-[-50deg] translate-y-[-0.5rem]' : ''}`}
      ></span>
    </button>
  )
}

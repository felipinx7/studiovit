import type { InterfaceIconeBarra } from '../../interfaces/interface-icone-barra'

export function IconeBarra(props: InterfaceIconeBarra) {
  return (
    <button
      onClick={props.ManipularAbrirHeader}
      className="relative flex h-5 w-7 cursor-pointer flex-col justify-between transition-all duration-500"
    >
      <span
        className={`line block h-1 rounded ${props.scrollHeader ? 'bg-black' : 'bg-white'} transition-all duration-300 ${props.abrirHeader === false ? 'translate-y-[0.5rem] rotate-45' : ''}`}
      ></span>
      <span
        className={`line block h-1 rounded ${props.scrollHeader ? 'bg-black' : 'bg-white'} transition-all duration-300 ${props.abrirHeader === true ? '' : 'hidden'}`}
      ></span>
      <span
        className={`line block h-1 rounded ${props.scrollHeader ? 'bg-black' : 'bg-white'} transition-all duration-300 ${props.abrirHeader === false ? 'translate-y-[-0.5rem] rotate-[-50deg]' : ''}`}
      ></span>
    </button>
  )
}

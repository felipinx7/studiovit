import type { interfaceClasseIcone } from '../../interfaces/interface-classe-icone'

export function IconeSetBaixo({ className }: interfaceClasseIcone) {
  return (
    <svg
      width="15"
      height="9"
      viewBox="0 0 15 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.6936 1.5L7.28686 7.2868L1.50005 1.88006"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

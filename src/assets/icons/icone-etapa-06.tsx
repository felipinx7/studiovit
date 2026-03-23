import type { interfaceClasseIcone } from "../../interfaces/interface-classe-icone";

export function IconeEtapa06({ className }: interfaceClasseIcone) {
    return(
  <svg
    width="27"
    height="30"
    viewBox="0 0 27 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M24 3H21V0H18V3H9V0H6V3H3C1.3455 3 0 4.3455 0 6V27C0 28.6545 1.3455 30 3 30H24C25.6545 30 27 28.6545 27 27V6C27 4.3455 25.6545 3 24 3ZM24.003 27H3V9H24L24.003 27Z"
      fill="url(#paint0_linear_403_166)"
    />
    <path
      d="M12 23.121L20.5605 14.5605L18.4395 12.4395L12 18.879L8.56045 15.4395L6.43945 17.5605L12 23.121Z"
      fill="url(#paint1_linear_403_166)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_403_166"
        x1="13.5"
        y1="0"
        x2="13.5"
        y2="30"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFBE2E" />
        <stop offset="1" stop-color="#FFAA00" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_403_166"
        x1="13.5"
        y1="12.4395"
        x2="13.5"
        y2="23.121"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFBE2E" />
        <stop offset="1" stop-color="#FFAA00" />
      </linearGradient>
    </defs>
  </svg>      
    )
  
}

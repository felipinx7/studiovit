import type { interfaceClasseIcone } from '../../interfaces/interface-classe-icone'

export function IconeEtapa02({ className }: interfaceClasseIcone) {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24.024 22.5225V25.5255C24.024 26.3548 24.6962 27.027 25.5255 27.027C26.3548 27.027 27.027 26.3548 27.027 25.5255V3.003H6.006V19.5195H3.003V1.5015C3.003 0.672252 3.67525 0 4.5045 0H28.5285C29.3578 0 30.03 0.672252 30.03 1.5015V25.5255C30.03 28.0133 28.0133 30.03 25.5255 30.03H4.5045C2.01674 30.03 0 28.0133 0 25.5255V22.5225H24.024Z"
        fill="url(#paint0_linear_374_610)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_374_610"
          x1="15.015"
          y1="0"
          x2="15.015"
          y2="30.03"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFBE2E" />
          <stop offset="1" stop-color="#FFAA00" />
        </linearGradient>
      </defs>
    </svg>
  )
}

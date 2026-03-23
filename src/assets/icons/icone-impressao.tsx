import type { interfaceClasseIcone } from '../../interfaces/interface-classe-icone'

export function IconeImpressao({ className }: interfaceClasseIcone) {
    return(
<svg
    width="24"
    height="23"
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20.475 9.1125H19.35C19.2262 9.1125 19.125 9.21375 19.125 9.3375V10.4625C19.125 10.5862 19.2262 10.6875 19.35 10.6875H20.475C20.5987 10.6875 20.7 10.5862 20.7 10.4625V9.3375C20.7 9.21375 20.5987 9.1125 20.475 9.1125ZM21.375 6.1875H18V0.225C18 0.10125 17.8987 0 17.775 0H5.85C5.72625 0 5.625 0.10125 5.625 0.225V6.1875H2.25C1.00687 6.1875 0 7.19437 0 8.4375V17.6625C0 18.1603 0.402187 18.5625 0.9 18.5625H5.625V22.275C5.625 22.3987 5.72625 22.5 5.85 22.5H17.775C17.8987 22.5 18 22.3987 18 22.275V18.5625H22.725C23.2228 18.5625 23.625 18.1603 23.625 17.6625V8.4375C23.625 7.19437 22.6181 6.1875 21.375 6.1875ZM7.5375 1.9125H16.0875V6.1875H7.5375V1.9125ZM16.0875 20.5875H7.5375V12.825H16.0875V20.5875ZM21.7125 16.65H18V10.9125H5.625V16.65H1.9125V8.4375C1.9125 8.25187 2.06437 8.1 2.25 8.1H21.375C21.5606 8.1 21.7125 8.25187 21.7125 8.4375V16.65Z"
      fill="url(#paint0_linear_451_235)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_451_235"
        x1="11.8125"
        y1="0"
        x2="11.8125"
        y2="22.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFBE2E" />
        <stop offset="1" stop-color="#FFAA00" />
      </linearGradient>
    </defs>
  </svg>
    )
}

import type { interfaceClasseIcone } from "../../interfaces/interface-classe-icone";

export function IconeEtapa01({ className }: interfaceClasseIcone) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.6 19.4999L18.2 22.0999L23.4 16.8999"
        stroke="url(#paint0_linear_447_40)"
        stroke-width="2.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26 10.3999H13C11.5641 10.3999 10.4 11.564 10.4 12.9999V25.9999C10.4 27.4358 11.5641 28.5999 13 28.5999H26C27.436 28.5999 28.6 27.4358 28.6 25.9999V12.9999C28.6 11.564 27.436 10.3999 26 10.3999Z"
        stroke="url(#paint1_linear_447_40)"
        stroke-width="2.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.19998 20.8001C3.76998 20.8001 2.59998 19.6301 2.59998 18.2001V5.2001C2.59998 3.7701 3.76998 2.6001 5.19998 2.6001H18.2C19.63 2.6001 20.8 3.7701 20.8 5.2001"
        stroke="url(#paint2_linear_447_40)"
        stroke-width="2.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_447_40"
          x1="19.5"
          y1="16.8999"
          x2="19.5"
          y2="22.0999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFBE2E" />
          <stop offset="1" stop-color="#FFAA00" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_447_40"
          x1="19.5"
          y1="10.3999"
          x2="19.5"
          y2="28.5999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFBE2E" />
          <stop offset="1" stop-color="#FFAA00" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_447_40"
          x1="11.7"
          y1="2.6001"
          x2="11.7"
          y2="20.8001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFBE2E" />
          <stop offset="1" stop-color="#FFAA00" />
        </linearGradient>
      </defs>
    </svg>
  )
}

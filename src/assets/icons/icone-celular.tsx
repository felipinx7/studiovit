import type { interfaceClasseIcone } from '../../interfaces/interface-classe-icone'

export function IconeCelular({ className }: interfaceClasseIcone) {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.3479 1.76416H9.70191C9.00015 1.76416 8.32713 2.04293 7.8309 2.53916C7.33468 3.03538 7.05591 3.7084 7.05591 4.41016V23.8142C7.05591 24.5159 7.33468 25.1889 7.8309 25.6852C8.32713 26.1814 9.00015 26.4602 9.70191 26.4602H18.5219C19.2237 26.4602 19.8967 26.1814 20.3929 25.6852C20.8891 25.1889 21.1679 24.5159 21.1679 23.8142V4.41016C21.1679 3.7084 20.8891 3.03538 20.3929 2.53916C19.8967 2.04293 19.2237 1.76416 18.5219 1.76416H15.8759M12.3479 1.76416V3.52816H15.8759V1.76416M12.3479 1.76416H15.8759M12.3479 23.8142H15.8759"
        stroke="url(#paint0_linear_447_76)"
        stroke-width="1.512"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_447_76"
          x1="14.1119"
          y1="1.76416"
          x2="14.1119"
          y2="26.4602"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFBE2E" />
          <stop offset="1" stop-color="#FFAA00" />
        </linearGradient>
      </defs>
    </svg>
  )
}

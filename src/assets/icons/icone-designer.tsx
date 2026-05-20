import type { interfaceClasseIcone } from '../../interfaces/interface-classe-icone'

export function IconeDesinger({ className }: interfaceClasseIcone) {
  return (
    <>
      <style>
        {`
          .dot-glow {
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background-color: #FFAA00;
            display: inline-block;
            animation: glow 2s infinite ease-in-out;
          }

          @keyframes glow {
            0%, 100% {
              filter: drop-shadow(0 0 0px #FFAA00);
              opacity: 1;
            }

            50% {
              filter: drop-shadow(0 0 6px #FFAA00);
              opacity: 0.9;
            }
          }
        `}
      </style>

      <span className={`dot-glow ${className || ''}`} />
    </>
  )
}

import ReactDOM from 'react-dom'
import { ondas } from '../../assets/image'

export function LayoutOnda() {
  return ReactDOM.createPortal(
    <div className="absolute max-md:hidden inset-0 h-screen w-screen">
      <img
        src={ondas}
        className="absolute bottom-0 left-0 w-[10000px] translate-x-[-1rem] translate-y-[10rem]"
        alt=""
      />
    </div>,
    document.body,
  )
}

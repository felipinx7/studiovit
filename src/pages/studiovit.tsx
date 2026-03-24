import { Header } from '../components/layout/header'
import { SecaoInicio } from './sections/secao-inicio'

export function StudioVit() {
  return (
    <main className="flex h-screen w-full items-start justify-center px-6">
      <section className="relative m-0 w-[100%] w-[1280px] overflow-y-hidden pt-6">
        {/* conteúdo do header  */}
        <div className="max-md: fixed top-0 left-1/2 z-[9999] w-full max-w-[1280px] -translate-x-1/2 transform py-5">
          <Header />
        </div>

        {/* Seções da site  */}
        <SecaoInicio />
      </section>
    </main>
  )
}

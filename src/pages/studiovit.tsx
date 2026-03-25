import { Header } from '../components/layout/header'
import { LinhaServicos } from '../components/layout/linha-servicos'
import { Footer } from './sections/footer'
import { SecaoContato } from './sections/secao-contato'
import { SecaoElevar } from './sections/secao-elevar'
import { SecaoEtapa } from './sections/secao-etapa'
import { SecaoExplorar } from './sections/secao-explorar'
import { SecaoInicio } from './sections/secao-inicio'
import { SecaoTrabalho } from './sections/secao-trabalhos'
import { SectionFaq } from './sections/section-faq'

export function StudioVit() {
  return (
    <main className="flex w-full flex-col items-center justify-start overflow-x-hidden">
      {/* conteúdo do header  */}
      <div className="fixed top-0 right-0 left-0 z-[9999] flex w-full justify-center px-6 py-5">
        <div className="w-full max-w-[1280px]">
          <Header />
        </div>
      </div>

      {/* Seções da site  */}
      <div className="w-full pt-28">
        <SecaoInicio />
      </div>
      <div className="w-full">
        <LinhaServicos />
      </div>
      <div className="w-full">
        <SecaoExplorar />
      </div>
      <div className="w-full">
        <SecaoTrabalho />
      </div>
      <div className="w-full">
        <SecaoEtapa />
      </div>
      <div className="w-full">
        <SectionFaq />
      </div>
      <div className="w-full">
        <SecaoElevar />
      </div>
      <div className="w-full">
        <SecaoContato />
      </div>
      <div className='w-full'>
        <Footer />
      </div>
    </main>
  )
}

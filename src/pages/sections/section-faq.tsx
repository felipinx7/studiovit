import { CardFaq } from '../../components/ui/card-faq'
import { textPerguntasFrequentes } from '../../constants/text-perguntas-frequentes'

export function SectionFaq() {
  return (
    <section className="flex w-full items-center justify-center pt-28 max-md:pb-15">
      <div className="mt-0 flex w-[100%] max-w-[1280px] max-md:px-4 flex-col items-center justify-start gap-8">
        {/* container dos textos */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-bold">
            PERGUNTAS FREQUENTES
          </h1>
          <p className="text-neutral-0/60 font-regular text-center font-family-secondary text-[1.1rem]">
            Respostas para perguntas que você pode ter:
          </p>
        </div>

        {/* containr das perguntas  */}
        <div className="w-full flex items-center justify-center flex-col gap-4">
          {textPerguntasFrequentes.map((pergunta) => (
            <CardFaq {...pergunta} direcao={pergunta.direcao} key={pergunta.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

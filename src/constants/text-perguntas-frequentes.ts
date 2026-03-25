import type { interfacePerguntasFrequente } from '../interfaces/interface-perguntas-frequente'

export const textPerguntasFrequentes: interfacePerguntasFrequente[] = [
  {
    id: '1',
    pergunta: 'Como funciona o processo de contratação?',
    resposta:
      'O processo de contratação é iniciado pelo WhatsApp. Por lá, você escolhe o serviço ou categoria desejada e recebe um atendimento personalizado, onde alinhamos todos os detalhes para entender exatamente o que você precisa.',
    direcao: false,
  },
  {
    id: '2',
    pergunta: 'Quais informações preciso enviar para iniciar o projeto?',
    resposta:
      'Antes do início, você responderá a um briefing. Esse formulário reúne todas as informações essenciais para entender suas preferências, referências e objetivos com o projeto.',
    direcao: true,
  },
  {
    id: '3',
    pergunta: 'Qual o prazo de entrega?',
    resposta:
      'O prazo de entrega é definido de acordo com a demanda atual. Após o pagamento de 50% do valor, seu projeto entra na fila de produção, e uma previsão de entrega é informada com base na ordem dos projetos.',
    direcao: false,
  },
  {
    id: '4',
    pergunta: 'Como funciona o processo de aprovação?',
    resposta:
      'Você receberá uma apresentação em PDF com o projeto desenvolvido. Nela, poderá analisar todos os detalhes e enviar seu feedback para possíveis ajustes antes da finalização.',
    direcao: false,
  },
  {
    id: '5',
    pergunta: 'Existe limite de alterações?',
    resposta:
      'Sim. As alterações são baseadas no briefing enviado inicialmente. Ajustes podem ser feitos dentro da proposta solicitada, mas mudanças completas de conceito ou ideia não estão incluídas.',
    direcao: true,
  },
  {
    id: '6',
    pergunta: 'Posso solicitar mudanças após a entrega final?',
    resposta:
      'Não. Após a aprovação da apresentação, será solicitada a confirmação para finalização dos arquivos. Depois dessa etapa, não são realizadas alterações. Caso necessário, ajustes futuros serão cobrados à parte.',
    direcao: false,
  },
  {
    id: '7',
    pergunta: 'Existe reembolso em caso de desistência?',
    resposta:
      'Não. Após o pagamento inicial de 50%, não há reembolso em caso de desistência do projeto. O cliente tem direito de solicitar reembolso caso o projeto não seja entregue dentro do prazo estabelecido.',
    direcao: true,
  },
  {
    id: '8',
    pergunta: 'Como é feita a entrega dos arquivos?',
    resposta:
      'Após a aprovação e pagamento final, os arquivos são organizados e enviados via Google Drive. O link ficará disponível por até 3 meses. Após esse período, não garantimos o armazenamento, por isso recomendamos que você faça o download e backup dos arquivos.',
    direcao: false,
  },
]

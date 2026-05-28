import { IconeCelular } from '../assets/icons/icone-celular'
import { IconeEstampaBlusa } from '../assets/icons/icone-estampa-blusa'
import { IconeVideo } from '../assets/icons/icone-video'
import type { InterfaceCardSolucao } from '../interfaces/interface-card-solucao'
import { mensagemWhatsapp } from '../utils/mensagem-whatsapp'

export const textoCardSolucao: InterfaceCardSolucao[] = [
  {
    icone: IconeCelular,
    nomeSolucao: 'Design Social Media',
    descricao:
      'Desenvolvimento de conteúdo mensal para redes sociais posts e stories pensados para manter sua marca presente e relevante todo mês.',
    linkWhatsapp: mensagemWhatsapp(
      'Olá, gostaria de mais informações sobre Design Social Media',
    ),
    direcao: false,
  },
  {
    icone: IconeEstampaBlusa,
    nomeSolucao: 'Estampa De Camisa',
    descricao:
      'Desenvolvimento de estampas para camisas, shorts e demais peças personalizadas de turmas, equipes e instituições.',
    linkWhatsapp: mensagemWhatsapp(
      'Olá, gostaria de mais informações sobre Estampa De Camisa',
    ),
    direcao: false,
  },
  {
    icone: IconeVideo,
    nomeSolucao: 'Produção e edição de vídeos',
    descricao:
      'Criação e edição de vídeos para redes sociais, conteúdos institucionais e produções audiovisuais com diferentes estilos e formatos.',
    linkWhatsapp: mensagemWhatsapp(
      'Olá, gostaria de mais informações sobre Produção e edição de vídeos',
    ),
    direcao: false,
  },
]

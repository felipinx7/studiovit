import { IconeCelular } from '../assets/icons/icone-celular'
import { IconeEstampaBlusa } from '../assets/icons/icone-estampa-blusa'
import { IconeIdentidadeVisual } from '../assets/icons/icone-identidade-visual'
import { IconeImpressao } from '../assets/icons/icone-impressao'
import { IconeVideo } from '../assets/icons/icone-video'
import type { InterfaceCardSolucao } from '../interfaces/interface-card-solucao'
import { mensagemWhatsapp } from '../utils/mensagem-whatsapp'

export const textoCardSolucao: InterfaceCardSolucao[] = [
  {
    icone: IconeCelular,
    nomeSolucao: 'Design para redes sociais',
    descricao:
      'Desenvolvimento de artes para posters, stories e anúncios, pensadas para fortalecer a presença da marca nas redes sociais.',
    linkWhatsapp: mensagemWhatsapp(
      'Olá, gostaria de mais informações sobre Design para redes sociais',
    ),
  },
  {
    icone: IconeEstampaBlusa,
    nomeSolucao: 'Estampas camisas',
    descricao:
      'Desenvolvimento de artes e estampas para camisas, uniformes e peças personalizadas para turmas, equipes e instituições.',
    linkWhatsapp: mensagemWhatsapp(
      'Olá, gostaria de mais informações sobre Estampas camisas',
    ),
  },
  {
    icone: IconeIdentidadeVisual,
    nomeSolucao: 'Identidade visual',
    descricao:
      'Criação de identidade visual para marcas que desejam se destacar, com desenvolvimento de elementos visuais que fortalecem a presença da marca.',
    linkWhatsapp: mensagemWhatsapp(
      'Olá, gostaria de mais informações sobre Identidade visual',
    ),
  },
  {
    icone: IconeImpressao,
    nomeSolucao: 'Materiais impressos',
    descricao:
      'Criação de design para cartões de visita, panfletos, banners e outros materiais gráficos voltados para divulgação.',
    linkWhatsapp: mensagemWhatsapp(
      'Olá, gostaria de mais informações sobre Materiais impressos',
    ),
  },
  {
    icone: IconeVideo,
    nomeSolucao: 'Produção e edição de vídeos',
    descricao:
      'Criação e edição de vídeos para redes sociais, conteúdos institucionais e produções audiovisuais com diferentes estilos e formatos.',
    linkWhatsapp: mensagemWhatsapp(
      'Olá, gostaria de mais informações sobre Produção e edição de vídeos',
    ),
  },
]

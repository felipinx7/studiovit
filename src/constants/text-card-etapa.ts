import { IconeEtapa01 } from "../assets/icons/icone-etapa-01";
import { IconeEtapa02 } from "../assets/icons/icone-etapa-02";
import { IconeEtapa03 } from "../assets/icons/icone-etapa-03";
import { IconeEtapa04 } from "../assets/icons/icone-etapa-04";
import { IconeEtapa05 } from "../assets/icons/icone-etapa-05";
import { IconeEtapa06 } from "../assets/icons/icone-etapa-06";
import type { InterfaceCardEtapa } from "../interfaces/interface-card-etapa";

export const textCardEtapa: InterfaceCardEtapa[] = [
  {
    icone: IconeEtapa01,
    numeroEtapa: "1º Etapa",
    descricao: "Escolha os serviços desejados.",
  },
  {
    icone: IconeEtapa02,
    numeroEtapa: "2º Etapa",
    descricao: "Consulte os termos de serviço.",
  },
  {
    icone: IconeEtapa03,
    numeroEtapa: "3º Etapa",
    descricao: "Receba o orçamento e formas de pagamento.",
  },
  {
    icone: IconeEtapa04,
    numeroEtapa: "4º Etapa",
    descricao: "Efetue o pagamento para dar continuidade",
  },
  {
    icone: IconeEtapa05,
    numeroEtapa: "5º Etapa",
    descricao: "Envie as informações do projeto (briefing).",
  },
  {
    icone: IconeEtapa06,
    numeroEtapa: "6º Etapa",
    descricao: "Alinhamento e definição do prazo de entrega.",
  },
];
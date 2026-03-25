import type { TypeIcone } from "../types/icone-type";

export interface InterfaceCardSolucao{
    icone: TypeIcone,
    nomeSolucao: string,
    descricao: string,
    linkWhatsapp: string;
    direcao: boolean
}
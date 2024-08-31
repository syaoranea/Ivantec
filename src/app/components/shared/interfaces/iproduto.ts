import { Icaracteristicas } from "./icaracteristicas";

export interface Iproduto {
    nome: string,
    descricao: string,
    caracteristicas: Icaracteristicas[],
    descricaoTitulo: string,
    descricao2: string
}

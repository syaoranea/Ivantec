import { Component, OnInit } from '@angular/core';
import { Iproduto } from '../../shared/interfaces/iproduto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss']
})
export class ServicesDetailsComponent implements OnInit {

    constructor(private route: ActivatedRoute) {}
    id: number

  produto: Iproduto[] = [
    {
    nome: 'PAINÉIS FRONTAIS EM POLICARBONATO',
    descricao: 'Com enorme resistência e durabilidade tanto em ambientes internos quanto externos, o policarbonato é um excelente material para a confecção de painéis de máquinas por permitir um acabamento sofisticado às peças ao mesmo tempo que é resistente a temperaturas elevadas (até 120 °C), à eletricidade, impactos e tem durabilidade superior a 10 anos.',
    caracteristicas:[
        {
        nome: 'Tamanhos e formatos',
        descricao: 'Não há limitações para cortes e formatos pois trabalhamos com corte eletrônico Plotter, que permite oferecermos uma gama enorme de possibilidades.'
        },
        {
        nome: 'Aplicações',
        descricao: ' Os painéis em policarbonato podem ser utilizados para vários tipos de máquinas, das menores às maiores, como painéis de equipamentos elétricos (não conduz eletricidade), painéis de caixas eletrônicos, painéis para equipamentos de academia, eletrodomésticos, eletrônicos, enfim, uma infinidade de possibilidades.'
        },
        {
        nome: 'Cores',
        descricao: 'Trabalhamos com impressão digital, ou seja, não temos limitações quanto a quantidade de cores.'
        },
        {
        nome: 'Opções do material',
        descricao: 'Existem dois tipos de acabamentos; Policarbonato Cristal (mais bonito e sofisticado, além de ser totalmente transparente) e Policarbonato Texturizado (confere mais resistência a riscos e manchas, mais durabilidade).'
        }
    ],
    descricaoTitulo: 'Recortes e encaixes personalizados para atender suas necessidades',
    descricao2: 'O Painel em Policarbonato pode ser confeccionado em diversos formatos, encaixes, recortes, tamanhos e combinações como espaços para as teclas de comando e espaços para displays ou telas em LED. Além disso, ele oferece uma infinita possibilidade de cores conferindo ao produto final um excelente acabamento, com alto grau de personalização e pleno atendimento até às necessidades mais particulares de cada projeto.'
    },
    {
    nome: 'Etiqueta',
    descricao: '',
    caracteristicas:[
        {
        nome: '',
        descricao: ''
        }
    ],
    descricaoTitulo: 'Recortes e encaixes personalizados para atender suas necessidades',
    descricao2: ''
    },

    {
    nome: 'TECLADO DE MEMBRANA',
    descricao: '',
    caracteristicas:[
        {
        nome: '',
        descricao: ''
        }
    ],
    descricaoTitulo: 'Recortes e encaixes personalizados para atender suas necessidades',
    descricao2: ''
    },
    {
    nome: 'CIRCUITO EM PRATA CONDUTIVA',
    descricao: '',
    caracteristicas:[
        {
        nome: '',
        descricao: ''
        }
    ],
    descricaoTitulo: 'Recortes e encaixes personalizados para atender suas necessidades',
    descricao2: ''
    },
    {
    nome: 'FLAT CABLE',
    descricao: '',
    caracteristicas:[
        {
        nome: '',
        descricao: ''
        }
    ],
    descricaoTitulo: 'Recortes e encaixes personalizados para atender suas necessidades',
    descricao2: ''
    }
]



ngOnInit() {
  // Para parâmetros de rota
  this.route.params.subscribe(params => {
    console.log('User ID:', params['id']);
    this.id= params['id'];
  });


}

}

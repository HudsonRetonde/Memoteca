import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

   listarPensamentos = [
    {
    conteudo: 'Passo informações ao componente filho',
    autoria: 'Componente Pai',
    modelo: 'modelo3'
    },
    {
    conteudo: 'Minha propriedade é decorada com @Input()',
    autoria: 'Componente Filho',
    modelo: 'modelo2'
    },
    {
    conteudo: 'A ti levanto os meus olhos, ó tu que habitas nos céus. Assim como os olhos dos servos atentam para as mãos dos seus senhores, e os olhos da serva para as mãos de sua senhora, assim os nossos olhos atentam para o SENHOR nosso Deus, até que tenha piedade de nós. Agora meu pensamento é gigantesco, logo preciso de mais espaço para renderizar o texto que está escrito aqui, meu chapa! A Deus toda honra, toda glória e todo louvor!',
    autoria: 'Componente Filho',
    modelo: 'modelo1'
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}

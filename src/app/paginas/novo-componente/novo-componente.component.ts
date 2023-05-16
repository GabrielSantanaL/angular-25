import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.scss']
})
export class NovoComponenteComponent implements OnInit {
  //ATRIBUTOS
  private nome:string;
  anoNascimento:number; //public é padrão

  //CONSTRUTOR
  constructor() {
    this.nome = "Fulano da Silva"
    this.anoNascimento = 2005;
  }

  //COMPORTAMENTO//AÇÕES
  idade(): number {
    return 2023 - this.anoNascimento;
  }

  ngOnInit(): void {
    console.log("Nome:" + this.nome);
    console.log("Idade:" + this.idade());
  }
}
